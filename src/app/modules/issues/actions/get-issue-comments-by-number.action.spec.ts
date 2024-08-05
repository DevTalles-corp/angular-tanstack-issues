import { environment } from 'src/environments/environment';
import { getIssueCommentsByNumber } from './get-issue-comments-by-number.action';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

const issueNumber = '123';
const mockComments: any[] = [
  { id: 1, body: 'First comment', user: { login: 'user1' } },
  { id: 2, body: 'Second comment', user: { login: 'user2' } },
];

describe('getIssueComments', () => {
  it('should fetch issue comments successfully', async () => {
    const requestURL = `${BASE_URL}/issues/${issueNumber}/comments`;
    const issueCommentsResponse = new Response(JSON.stringify(mockComments), {
      status: 200,
      statusText: 'OK',
    });

    spyOn(window, 'fetch').and.resolveTo(issueCommentsResponse);

    const issue = await getIssueCommentsByNumber(issueNumber);

    expect(window.fetch).toHaveBeenCalledWith(requestURL, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
  });

  it('should throw an error if the response is not ok', async () => {
    const issueResponse = new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });

    spyOn(window, 'fetch').and.resolveTo(issueResponse);

    try {
      const issue = await getIssueCommentsByNumber(issueNumber);
      expect(true).toBeFalse();
    } catch (error) {
      // expect(error).toBe(`Can't load issue ${issueNumber}`);
      expect(error).toBe("Can't load issues");
    }
  });
});
