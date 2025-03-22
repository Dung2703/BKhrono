import { getClassesList, parseClassString } from "./formatInputData";

export const separateClasses = (rawData: string) => {
    const classStrings = getClassesList(rawData);
    const parsedClasses = classStrings.flatMap(parseClassString);

    const classesWithLab = parsedClasses.filter(cls => cls.type === "lab");
    const classesWithoutLab = parsedClasses.filter(cls => cls.type === "non-lab");

    console.log("Classes with Lab:", classesWithLab);
    console.log("Classes without Lab:", classesWithoutLab);

    return { classesWithLab, classesWithoutLab };
};



