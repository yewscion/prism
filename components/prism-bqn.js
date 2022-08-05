Prism.languages.bqn = {
	'shebang': {
	pattern: /^#!\s*\/.*/,
	alias: 'important'
	},
	'comment': /#.*$/m,
	'string-literal': {
	pattern: /"(?:\\[\s\S]|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
	greedy: true,
	alias: 'string'
	},
	'character-literal': {
	pattern: /'.'/,
	greedy: true,
	alias: 'string'
	},
	'function': {
	pattern: /[•][A-Z0-9_¯.∞π]+[A-Z0-9_¯.∞π]*/i
	},
	'dot-notation-on-brackets': {
		pattern: /{(?=.*}\.)|}\./,
		alias: 'namespace'
	},
	'special-name': {
	pattern: /[𝕨𝕩𝕗𝕘𝕤𝕣𝕎𝕏𝔽𝔾𝕊]|_𝕣[_]?/,
	alias: 'keyword'
	},
	'dot-notation-on-name': {
		pattern: /[A-Z_][A-Z_¯∞π0-9]*\./i,
		alias: 'namespace'
	},
	'word-number-scientific': {
		pattern: /\d+(?:\.\d+)?[e|E][¯]?\d+/,
		alias: 'number'
	},
	'word-name': {
	pattern: /[A-Z_][A-Z_¯∞π0-9]*/i,
	alias: 'symbol'
	},
	'word-number': {
		pattern: /[¯∞π]?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞|π)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞|π))?/i,
		alias: 'number'
	},
	'null-literal': {
	pattern: /[@]/,
	alias: 'string'
	},
	'primitive-functions': {
	pattern: /[-+×÷⋆√⌊⌈|¬∧∨<>≠=≤≥≡≢⊣⊢⥊∾≍⋈↑↓↕«»⌽⍉/⍋⍒⊏⊑⊐⊒∊⍷⊔!]/u,
	alias: 'operator'
	},
	'primitive-1-operators': {
	pattern: /[`˜˘¨⁼⌜´˝˙]/,
	alias: 'operator'
	},
	'primitive-2-operators': {
	pattern: /[∘⊸⟜○⌾⎉⚇⍟⊘◶⎊]/,
	alias: 'operator'
	},
	'punctuation': /[←⇐↩(){}⟨⟩[]‿·⋄,.;:?]/
};
