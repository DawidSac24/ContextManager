import { Page } from "./page.model";

export interface Context {
  id?: number;
  name: string;
  pages: Page[];
}

export interface NewContext {
  name: string;
}

export interface ContextDTO {
  id?: number;
  name: string;
  pages: Page[];
}

export interface NewContextDTO {
  name: string;
}
