interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

const createEmployee = (
  salary: string | number
): DirectorInterface | TeacherInterface => {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
};

const isDirector = (employee: DirectorInterface | TeacherInterface): boolean => {
  return true;
  // TODO: ..............................................
}

const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
  if (isDirector(employee)) return 'workDirectorTasks';
  return 'workTeacherTasks';
}
