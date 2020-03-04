module.exports = {
	extends: ["eslint-config-react-app"],
	plugins: ["@typescript-eslint", "react-hooks"],
	parser: "@typescript-eslint/parser",
	rules: {
		"new-cap": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"react-hooks/rules-of-hooks": "error", 
    	"react-hooks/exhaustive-deps": "warn"
	}
};
