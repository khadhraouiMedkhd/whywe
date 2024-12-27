// export interface Sponsor {
//     id: number;
//     name: string;
//     industry: string;
//     budget: number;
//     location: string;
//     focus: string;
//   }
export class Sponsor {
    id: number;
    name: string;
    industry: string;
    budget: number;
    targetAudience: string;
    preferredEventTypes: string[];
    location: string;
  
    constructor(
      id: number,
      name: string,
      industry: string,
      budget: number,
      targetAudience: string,
      preferredEventTypes: string[],
      location: string
    ) {
      this.id = id;
      this.name = name;
      this.industry = industry;
      this.budget = budget;
      this.targetAudience = targetAudience;
      this.preferredEventTypes = preferredEventTypes;
      this.location = location;
    }
  }
  