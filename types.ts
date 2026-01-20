
export enum DivisionId {
  PROPERTY_RESET = 'property_reset',
  SPARK_SHIELD = 'spark_shield',
  BUSINESS_TOOLS = 'business_tools',
  DIGITAL_TOOLS = 'digital_tools',
  POS_FIGHT = 'pos_fight'
}

export interface Division {
  id: DivisionId;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  link: string;
  icon: string;
  isExternal?: boolean;
  logo?: string;
  note?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
