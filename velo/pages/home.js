import { getAtlasState, setAtlasState } from '../site/state/store';
import { resolveAtlasCta } from '../site/routing/ctaRouter';

$w.onReady(function () {
  const state = getAtlasState();
  const cta = resolveAtlasCta(state);

  // Example launch-safe wiring placeholders.
  if ($w('#ctaPrimary')) {
    $w('#ctaPrimary').label = cta.label;
  }

  if ($w('#segmentDropdown')) {
    $w('#segmentDropdown').onChange((event) => {
      const nextState = setAtlasState({ customerSegment: event.target.value });
      const nextCta = resolveAtlasCta(nextState);
      if ($w('#ctaPrimary')) {
        $w('#ctaPrimary').label = nextCta.label;
      }
    });
  }
});
