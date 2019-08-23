import getFeedbackPattern from "../../api/getFeedbackPattern";
export const updateForm = teamId => {
    return {
        type: "UPDATE_FORM",
        payload: new Promise((resolve, reject) => {
            getFeedbackPattern(teamId)
                .then(details => {
                    let payload = {};
                    let skillmap = details.designations;
                    let skills = [];
                    let options = [];
                    Object.keys(skillmap).map(skill_cat => {
                        options.push({ value: skill_cat, label: skill_cat });
                        skillmap[skill_cat].map(skill => {
                            if (!skills.includes(skill)) skills.push(skill);
                            return null;
                        });
                        return null;
                    });
                    let skillOptions = [];
                    skills.map(skill => {
                        skillOptions.push({ value: skill, label: skill });
                        return null;
                    });
                    payload = { skillOptions, skillmap, options, skills };
                    return payload;
                })
                .then(payload => {
                    resolve(payload);
                });
        })
    };
};
export const resetForm = () => {
    return {
        type: "RESET_FORM"
    };
};
export const getStatus = status => {
    return {
        type: "GET_STATUS",
        status
    };
};
export const handleDateChange = date => {
    return {
        type: "DATE_CHANGE",
        date
    };
};
export const updateFormState = (key, value) => {
    const action = {
        type: "UPDATE_FORM_STATE",
        key,
        value
    };
    return action;
};
export const onStarClick = (nextValue, name) => {
    const action = {
        type: "STAR_CLICK",
        nextValue,
        name
    };
    return action;
};
export const handleDesignationChange = designation => {
    const action = {
        type: "DESIGNATION_CHANGE",
        designation
    };
    return action;
};
export const handleSkillChange = _other_skills => {
    const action = {
        type: "HANDLE_SKILL_CHANGE",
        _other_skills
    };
    return action;
};
export const removeRating = skill => {
    const action = {
        type: "REMOVE_RATING",
        skill
    };
    return action;
};