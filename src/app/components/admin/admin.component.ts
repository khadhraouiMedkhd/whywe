import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventCreator } from '../../models/event-creator';
import { Sponsor } from '../../models/sponsor';
import { MatchResult } from '../../models/match-result';
import Sponsors from '../../jsons/sponsors.json';
import EventCreators from '../../jsons/event-creators.json';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sponsors: Sponsor[] = Sponsors; // Initialize with your data
  eventCreators: EventCreator[] = EventCreators; // Initialize with your data
  matchResults: MatchResult[] = [];
  isLoading = false;

  @ViewChild('matchesGrid', { static: true }) matchesGrid!: ElementRef;
  @ViewChild('spinner', { static: true }) spinner!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.onRefresh();
  }

  calculateMatchScore(sponsor: Sponsor, eventCreator: EventCreator): number {
    let score = 0;
    if (sponsor.industry === eventCreator.expertiseArea) score += 30;
    if (sponsor.location === eventCreator.location) score += 20;
    if (sponsor.targetAudience === eventCreator.targetAudience) score += 20;
    if (sponsor.budget >= eventCreator.eventBudget) score += 10;

    const matchingEventTypes = sponsor.preferredEventTypes.filter(type =>
      eventCreator.eventTypes.includes(type)
    );
    score += matchingEventTypes.length * 5;

    return score;
  }

  matchSponsorsWithEventCreators(): void {
    const results: MatchResult[] = [];
    this.eventCreators.forEach((creator) => {
      this.sponsors.forEach((sponsor) => {
        const score = this.calculateMatchScore(sponsor, creator);
        if (score > 0) {
          results.push({
            sponsorName: sponsor.name,
            eventCreatorName: creator.name,
            score: score
          });
        }
      });
    });

    this.matchResults = results.sort((a, b) => b.score - a.score);
  }

  onRefresh(): void {
    this.isLoading = true;
    this.matchResults = [];

    setTimeout(() => {
      this.matchSponsorsWithEventCreators();
      this.isLoading = false;
    }, 2000);
  }
  getBackgroundColor(score: number): string {
    if (score >= 70) {
      return 'green';    // Green for score >= 70
    } else if (score > 30 && score < 70) {
      return 'yellow';   // Yellow for 30 < score < 70
    } else {
      return 'red';      // Red for score <= 30
    }
  }
}
