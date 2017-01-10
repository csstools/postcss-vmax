// tooling
const postcss = require('postcss');

// vmax matcher
const vmaxMatch = /\b([-+]?[0-9]*\.?[0-9]+vmax)\b/g;

// vmax fallbacks
const fallbacks = [
	{
		orientation: 'landscape',
		unit: 'vw'
	},
	{
		orientation: 'portrait',
		unit: 'vh'
	}
];

// plugin
module.exports = postcss.plugin('postcss-vmax', () => (root) => {
	root.walkRules(
		(rule) => {
			// get all child declarations using vmax
			const decls = rule.nodes.filter(
				(node) => node.type === 'decl' && node.value.match(vmaxMatch)
			);

			// if there were declarations using vmax
			if (decls.length) {
				// insert fallbacks before the rule
				rule.parent.insertBefore(
					rule,
					fallbacks.map(
						(fallback) => {
							// fallback at-rule
							const atRule = postcss.atRule({
								name: 'media',
								params: `(orientation: ${ fallback.orientation })`
							});

							// fallback rule
							const cloneRule = rule.clone().removeAll();

							// add fallback rule to fallback at-rule
							atRule.append(cloneRule);

							// add fallback declarations to rule
							cloneRule.append(
								decls.map(
									(decl) => decl.clone({
										// replace vmax with vw/vh
										value: decl.value.replace(
											vmaxMatch,
											($0, $1) => $1.replace(/vmax$/, fallback.unit)
										)
									})
								)
							);

							return atRule;
						}
					)
				);
			}
		}
	);
});
