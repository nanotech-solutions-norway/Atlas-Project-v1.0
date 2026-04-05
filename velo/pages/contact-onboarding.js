import { getAtlasState } from '../site/state/store';

$w.onReady(function () {
  const state = getAtlasState();

  if ($w('#segmentField') && state.customerSegment) {
    $w('#segmentField').value = state.customerSegment;
  }

  if ($w('#intentField') && state.packageIntent) {
    $w('#intentField').value = state.packageIntent;
  }

  if ($w('#platformField')) {
    $w('#platformField').value = state.selectedPlatform || 'chatgpt';
  }
});
