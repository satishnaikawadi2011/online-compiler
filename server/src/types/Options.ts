export interface Options {
	timeout?: number;
	stdin?: string;
	compileTimeout?: number;
	/**
     * Limit the ammount of characters of program's stderr, default is 1000
     */
	stderrLimit?: number;
	/**
     * Limit the ammount of characters of program's stdout, default is 1000
     */
	stdoutLimit?: number;
	/**
     * Set or compiler args if necessary for the specific language
     */
	compilerArgs?: string;
}
