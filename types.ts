
export interface ValueProp {
  title: string;
  description: string;
  icon: string;
  content?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  company: string;
  story?: string;
  isLogo?: boolean;
  title?: string;
}
