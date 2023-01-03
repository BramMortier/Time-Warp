// ------------------------------------------- //
// module imports
import { addCollaborator, addProject } from "../components/newProject";
import { addTask } from "../components/newTask";
import { login, loginWithGoogle, logout, signUp } from "../firebase/auth";
import { getProjects } from "../firebase/database/projects";
import {
    projectsPage,
    completedProjectsBtn,
    inProgressProjectsBtn,
    dashboardPage,
    newProjectBtns,
    newProjectModal,
    closeModalBtns,
    logoutBtn,
    loginPage,
    signUpForm,
    loginForm,
    newPasswordInput,
    signUpFormLink,
    signUpPage,
    loginFormLink,
    loginWithGoogleBtn,
    addCollaboratorBtn,
    newProjectCollaboratorsList,
    createProjectBtn,
    newProjectForm,
    dashboardBackBtn,
    projectsBackBtn,
    projectBackBtn,
    projectPage,
    newTaskBtns,
    newTaskModal,
    newTaskForm,
    createTaskBtn,
} from "./constants";
import { closeModal, navigate, openModal } from "./router";
import { checkPasswordSecurity } from "./validation";
// ------------------------------------------- //

completedProjectsBtn.addEventListener("click", (): void => {
    getProjects();
    navigate(projectsPage);
});

inProgressProjectsBtn.addEventListener("click", (): void => {
    getProjects();
    navigate(projectsPage);
});

projectsBackBtn.addEventListener("click", (): void => {
    navigate(projectsPage);
});

projectBackBtn.addEventListener("click", (): void => {
    navigate(projectPage);
});

dashboardBackBtn.addEventListener("click", (): void => {
    navigate(dashboardPage);
});

logoutBtn.addEventListener("click", (): void => {
    logout();
    navigate(loginPage);
});

newProjectBtns.forEach((newProjectBtn: HTMLElement): void => {
    newProjectBtn.addEventListener("click", (): void => {
        newProjectForm.reset();
        newProjectCollaboratorsList.innerHTML = "";
        openModal(newProjectModal);
    });
});

newTaskBtns.forEach((newTaskBtn: HTMLElement): void => {
    newTaskBtn.addEventListener("click", (): void => {
        newTaskForm.reset();
        openModal(newTaskModal);
    });
});

addCollaboratorBtn.addEventListener("click", (): void => {
    addCollaborator();
});

createProjectBtn.addEventListener("click", (e: Event): void => {
    addProject(e);
});

createTaskBtn.addEventListener("click", (e: Event): void => {
    addTask(e);
});

closeModalBtns.forEach((closeModalBtn: HTMLElement): void => {
    closeModalBtn.addEventListener("click", (): void => {
        closeModal();
    });
});

signUpForm.addEventListener("submit", (e: Event): void => {
    signUp(e);
});

loginForm.addEventListener("submit", (e: Event): void => {
    login(e);
});

newPasswordInput.addEventListener("input", (): void => {
    checkPasswordSecurity();
});

signUpFormLink.addEventListener("click", (): void => {
    navigate(loginPage);
});

loginFormLink.addEventListener("click", (): void => {
    navigate(signUpPage);
});

loginWithGoogleBtn.addEventListener("click", (): void => {
    loginWithGoogle();
});
