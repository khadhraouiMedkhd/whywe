
export class EventCreator {
    id: number;
    name: string;
    expertiseArea: string;
    eventBudget: number;
    targetAudience: string;
    eventTypes: string[];
    location: string;
  
    constructor(
      id: number,
      name: string,
      expertiseArea: string,
      eventBudget: number,
      targetAudience: string,
      eventTypes: string[],
      location: string
    ) {
      this.id = id;
      this.name = name;
      this.expertiseArea = expertiseArea;
      this.eventBudget = eventBudget;
      this.targetAudience = targetAudience;
      this.eventTypes = eventTypes;
      this.location = location;
    }
  }
  