abstract class PhoneCameraApp {
    shareMethods: ShareMethod[];

    constructor(shareMethods: ShareMethod[]) {
        this.shareMethods = shareMethods;
    }

    take(): void {
        console.log("I'm taking a pic!");
    }

    save(): void {
        console.log("I'm saving a pic!");
    }

    abstract edit(): void;
}

interface ShareMethod {
    share(): void;
}

class ShareWithEmail {
    share(): void {
        console.log("Sharing a pic via email!");
    }
}

class ShareWithText {
    share(): void {
        console.log("Sharing a pic via text!");
    }
}

class ShareWithSocialMedia {
    share(): void {
        console.log("Sharing a pic via social media!");
    }
}

class BasicCameraApp extends PhoneCameraApp {
    constructor(shareMethods: ShareMethod[]) {
        super(shareMethods);
    }

    edit(): void {
        console.log("Editing with basic features...");
    }
}

class CameraPlusApp extends PhoneCameraApp {
    constructor(shareMethods: ShareMethod[]) {
        super(shareMethods);
    }

    edit(): void {
        console.log("Editing with premium features...");
    }
}

var shareMethods: ShareMethod[] = [new ShareWithEmail(), new ShareWithText(), new ShareWithSocialMedia()];
var basicApp: PhoneCameraApp = new BasicCameraApp(shareMethods);