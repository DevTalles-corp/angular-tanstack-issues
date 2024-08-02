export interface GitHubIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: State;
  locked: boolean;
  assignee: User | null;
  assignees: User[];
  milestone: Milestone;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: null;
  author_association: AuthorAssociation;
  active_lock_reason: null;
  draft?: boolean;
  pull_request?: PullRequest;
  body: null | string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null;
  state_reason: null;
}

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum Type {
  User = 'User',
}

export enum AuthorAssociation {
  Collaborator = 'COLLABORATOR',
  Contributor = 'CONTRIBUTOR',
  Member = 'MEMBER',
  None = 'NONE',
}

export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

export interface Milestone {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: NodeID;
  number: number;
  title: Title;
  description: string;
  creator: User;
  open_issues: number;
  closed_issues: number;
  state: State;
  created_at: Date;
  updated_at: Date;
  due_on: null;
  closed_at: null;
}

export enum NodeID {
  MDk6TWlsZXN0B25LMzA0NTk2Nw = 'MDk6TWlsZXN0b25lMzA0NTk2Nw==',
  MDk6TWlsZXN0B25LMzE0Mzg4MA = 'MDk6TWlsZXN0b25lMzE0Mzg4MA==',
}

export enum State {
  Open = 'open',
  Closed = 'closed',
  All = 'all',
}

export enum Title {
  Backlog = 'Backlog',
  NeedsTriage = 'needsTriage',
}

export interface PullRequest {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: null;
}

export interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}
