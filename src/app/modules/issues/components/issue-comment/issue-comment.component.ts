import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces';

import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './issue-comment.component.html',
})
export class IssueCommentComponent {
  issue = input.required<GitHubIssue>();
}
