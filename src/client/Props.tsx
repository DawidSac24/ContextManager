import { ContextDTO } from "../local-server/models/context.model";
import { ContextState } from "./hooks/useContextState";

export type Props = {
  context: ContextDTO;
  isOpened: boolean;
  loadContexts: () => void;
  openContext: () => void;
};

export type ContextProps = {
  context: ContextDTO;
  setContextState: (state: ContextState) => void;
};

export type DefaultContextProps = {
  context: ContextDTO;
  isOpened: boolean;
  selectContext: () => void;
};

export type SelectedContextProps = {
  context: ContextDTO;
  isOpened: boolean;
  loadContexts: () => void;
  openContext: () => void;
  setContextState: (state: ContextState) => void;
  onOutsideClick: () => void;
};

export type EditedContextProps = {
  context: ContextDTO;
  isOpened: boolean;
  loadContexts: () => void;
  setContextState: (state: ContextState) => void;
  onOutsideClick: () => void;
};

export type DropDownPros = {
  context: ContextDTO;
  loadContexts: () => void;
  openContext: () => void;
  setContextState: (state: ContextState) => void;
};
