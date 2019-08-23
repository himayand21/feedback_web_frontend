export const changeTeamName = teamName => {
    return {
        type: "CHANGE_TEAM_NAME",
        teamName
    };
};
export const editDesgn = desgn => {
    return {
        type: "EDIT_DESGN",
        desgn
    };
};
export const editDesignation = () => {
    return {
        type: "EDIT_DESIGNATION"
    };
};
export const editSkill = (designation, new_skill, old_skill_index) => {
    return {
        type: "EDIT_SKILL",
        designation,
        new_skill,
        old_skill_index
    };
};
export const removeDesgn = desgn => {
    return {
        type: "REMOVE_DESGN",
        desgn
    };
};
export const removeSkill = (key, value) => {
    return {
        type: "REMOVE_SKILL",
        key,
        value
    };
};
export const addDesignation = () => {
    return {
        type: "ADD_DESIGNATION"
    };
};
export const addSkills = (designation, skill) => {
    return {
        type: "ADD_SKILLS",
        designation,
        skill
    };
};
export const updateDesignation = designation => {
    return {
        type: "UPDATE_DESGN",
        designation
    };
};


export const resetTeam = () => {
    return {
        type: "RESET_TEAM"
    };
};
export const configureTeam = payload => {

    const action = {
        type: "CONFIG_TEAM",
        payload
    }
    return action;
}