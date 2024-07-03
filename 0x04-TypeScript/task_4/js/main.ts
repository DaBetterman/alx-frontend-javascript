interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}
    
    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }
}
