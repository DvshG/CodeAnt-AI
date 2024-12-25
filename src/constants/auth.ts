import { Github} from '../components/Github';
import { Gitlab} from '../components/Gitlab';
import { Azure} from '../components/Azure';
import { Bitbucket} from '../components/Bitbucket';
import { Key} from '../components/Key';
export const SAAS_PROVIDERS = [
  {
    id: 'github',
    name: 'Sign in with Github',
    icon: Github
  },
  {
    id: 'bitbucket',
    name: 'Sign in with Bitbucket',
    icon: Bitbucket
  },
  {
    id: 'azure',
    name: 'Sign in with Azure DevOps',
    icon: Azure
  },
  {
    id: 'gitlab',
    name: 'Sign in with GitLab',
    icon: Gitlab
  }
] as const;

export const SELF_HOSTED_PROVIDERS = [
  {
    id: 'gitlab-self-hosted',
    name: 'Self Hosted GitLab',
    icon: Gitlab
  },
  {
    id: 'sso',
    name: 'Sign in with SSO',
    icon: Key
  }
] as const;

export type DeploymentType = 'saas' | 'self-hosted';