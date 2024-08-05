import { sleep } from '@helpers/sleep';
import { GitHubLabel } from '../interfaces';
import { environment } from 'src/environments/environment.development';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getLabels = async (): Promise<GitHubLabel[]> => {
  try {
    const resp = await fetch(`${BASE_URL}/labels`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load labels";

    const labels: GitHubLabel[] = await resp.json();

    return labels;
  } catch (error) {
    throw "Can't load labels";
  }
};
