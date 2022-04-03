
/**
 * 
 * @param input array containing all the input parameters for given code sample
 * @returns formatted stdin string which can be passed to spawn
 */
export const formatStdin = (input:any[]) : string => {
		let stdin: string|undefined = '';
		input?.forEach((i: any,index:number) => {
			if (index === input.length - 1) {
				stdin += `${i}`;
			}else{ stdin += `${i}\n`;}
		})
    stdin = stdin?.replace('undefined', '');
    return stdin;
};
