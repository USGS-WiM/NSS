interface NodeRequireFunction {
	(id: string): any;
}

interface NodeRequire extends NodeRequireFunction {
	resolve(id: string): string;
	cache: any;
	extensions: any;
	main: NodeModule | undefined;
}

declare var require: NodeRequire;

interface NodeModule {	
	require: NodeRequireFunction;
	id: string;
}

declare var module: NodeModule;

/* used to be::: https://github.com/angular/angular-cli/issues/2221
/* SystemJS module definition 
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
*/