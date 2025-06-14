import { ContextDTO } from "../local-server/models/context.model";
import { ContextState } from "./hooks/useContextState";

export type Props = {
  context: ContextDTO;
  loadContexts: () => void;
};

export type ContextProps = {
  context: ContextDTO;
  setContextState: (state: ContextState) => void;
};

export type DefaultContextProps = {
  context: ContextDTO;
  selectContext: () => void;
};

export type SelectedContextProps = {
  context: ContextDTO;
  loadContexts: () => void;
  setContextState: (state: ContextState) => void;
  onOutsideClick: () => void;
};

export type EditedContextProps = {
  context: ContextDTO;
  loadContexts: () => void;
  setContextState: (state: ContextState) => void;
  onOutsideClick: () => void;
};

export type DropDownProps = {
  context: ContextDTO;
  loadContexts: () => void;
  setContextState: (state: ContextState) => void;
};

export type PageListProps = {
  context: ContextDTO;
  showPageList: boolean;
  setShowPageList: () => void;
};
