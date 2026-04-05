import { getAtlasState, setAtlasState } from '../site/state/store';
import { resolveAtlasCta } from '../site/routing/ctaRouter';

$w.onReady(function () {
  const state = getAtlasState();
  const cta = resolveAtlasCta(state);

  if ($w('#solutionsCta')) {
    $w('#solutionsCta').label = cta.label;
  }

  if ($w('#packageIntentDropdown')) {
    $w('#packageIntentDropdown').onChange((event) => {
      const nextState = setAtlasState({ packageIntent: event.target.value });
      const nextCta = resolveAtlasCta(nextState);
      if ($w('#solutionsCta')) {
        $w('#solutionsCta').label = nextCta.label;
      }
    });
  }
});
