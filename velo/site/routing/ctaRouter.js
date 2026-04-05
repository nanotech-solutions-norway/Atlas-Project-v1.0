export function resolveAtlasCta(state = {}) {
  const {
    packageIntent = '',
    governanceSensitivity = '',
    customerSegment = ''
  } = state;

  if (governanceSensitivity === 'high') {
    return {
      slug: 'book-consultation',
      label: 'Book Consultation',
      targetPage: 'Contact / Onboarding'
    };
  }

  if (packageIntent === 'guided-setup') {
    return {
      slug: 'start-onboarding',
      label: 'Start Onboarding',
      targetPage: 'Contact / Onboarding'
    };
  }

  if (packageIntent === 'team-onboarding' || customerSegment === 'smb') {
    return {
      slug: 'book-consultation',
      label: 'Book Consultation',
      targetPage: 'Contact / Onboarding'
    };
  }

  return {
    slug: 'request-demo',
    label: 'Request Demo',
    targetPage: 'Demo / Sandbox'
  };
}
