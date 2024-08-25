import NodeEnvironment from 'jest-environment-node';

class TestEnvironment extends NodeEnvironment {
    
    constructor(config: any, context: any) {
        super(config, context);
    }

    public async setup(): Promise<void> {
        await super.setup();

        console.log('SETTING UP...');
        // await someSetupTasks(this.testPath);
        // this.global.someGlobalObject = createGlobalObject();
    
        // // Will trigger if docblock contains @my-custom-pragma my-pragma-value
        // if (this.docblockPragmas['my-custom-pragma'] === 'my-pragma-value') {
        //   // ...
        // }
    }

    public async teardown(): Promise<void> {
        await super.teardown();
        console.log('TEARING DOWN!');
        // this.global.someGlobalObject = destroyGlobalObject();
        // await someTeardownTasks();
        
    }
}

export default TestEnvironment;