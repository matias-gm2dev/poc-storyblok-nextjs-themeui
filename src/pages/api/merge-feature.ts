// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// ?access_token=eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ&owner=matias-gm2dev&repo=poc-storyblok-nextjs-themeui&base=qa&head=development&commit_message=merge%20develop%20to%20qa;
// ?access_token=eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ&owner=matias-gm2dev&repo=poc-storyblok-nextjs-themeui&base=qa&head=development&commit_message=merge%20develop%20to%20qa;
// ?access_token=eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ&owner=matias-gm2dev&repo=poc-storyblok-nextjs-themeui&base=qa&head=development&commit_message=merge%20develop%20to%20qa;


import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';

type Data = {
  token: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.query.access_token !== process.env.ACCESS_TOKEN) return;

  const owner = req.query.owner as string;
  const repo = req.query.repo as string;
  const base = req.query.base as string;
  const head = req.query.head as string;
  const commit_message = req.query.commit_message as string;

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    await octokit.request(`POST /repos/${owner}/${repo}/merges`, {
      owner,
      repo,
      base,
      head,
      commit_message,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    res.status(200);
  } catch (error) {
    res.status(500);
  }
}
