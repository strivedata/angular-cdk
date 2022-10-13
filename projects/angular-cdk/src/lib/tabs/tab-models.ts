import { UIXTab } from './tab';

export interface TabChangeEvent {
  selectedTab: UIXTab;
  selectedTabIndex: number;
  previousTab: UIXTab;
  previousTabIndex: number;
}
