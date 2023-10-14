import {Donation} from "./donation"
import {User} from "./user";

export class Campaign {
  _id!:string
  title!: string;
  description!: string;
  goal!: number;
  donatedMoney!: number;
  donations!: Donation[];
  class?:string;
  imageUrl?: string;
  isOpen!: boolean;
  createdAt!: string;
  creatorId!: string;
  creator?: User;
  tags!: string[];
  relatedCampaigns?: Campaign[];
}
