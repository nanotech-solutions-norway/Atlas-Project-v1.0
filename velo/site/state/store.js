import { session } from 'wix-storage';

const KEY = 'atlasLaunchState';

const DEFAULT_STATE = {
  selectedPlatform: 'chatgpt',
  selectedUseCase: '',
  customerSegment: '',
  packageIntent: '',
  teamSizeBand: '',
  governanceSensitivity: '',
  savedProofItems: [],
  ctaPath: '',
  scenarioStatement: ''
};

export function getAtlasState() {
  const raw = session.getItem(KEY);
  if (!raw) {
    return { ...DEFAULT_STATE };
  }

  try {
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch (error) {
    console.warn('Atlas state parse failed, resetting state.', error);
    session.removeItem(KEY);
    return { ...DEFAULT_STATE };
  }
}

export function setAtlasState(patch = {}) {
  const nextState = { ...getAtlasState(), ...patch };
  session.setItem(KEY, JSON.stringify(nextState));
  return nextState;
}

export function clearAtlasState() {
  session.removeItem(KEY);
  return { ...DEFAULT_STATE };
}
