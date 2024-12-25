import { Github, GitlabIcon, Cloud } from 'lucide-react';

export const SAAS_PROVIDERS = [
  {
    id: 'github',
    name: 'Github',
    icon: Github
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket',
    icon: Cloud
  },
  {
    id: 'azure',
    name: 'Azure DevOps',
    icon: Cloud
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    icon: GitlabIcon
  }
] as const;

export const SELF_HOSTED_PROVIDERS = [
  {
    id: 'gitlab-self-hosted',
    name: 'Self Hosted GitLab',
    icon: GitlabIcon
  },
  {
    id: 'sso',
    name: 'Sign in with SSO',
    icon: Cloud
  }
] as const;

export type DeploymentType = 'saas' | 'self-hosted';