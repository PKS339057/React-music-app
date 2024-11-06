export function calculateMixColor(dark, light) {
	return `rgb(
	  ${(dark[0] + light[0]) * 3 / 4},
	  ${(dark[1] + light[1]) * 3 / 4},
	  ${(dark[2] + light[2]) * 3 / 4}
	)`;
  }
  