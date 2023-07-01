export const experiences = [
  {
    startDate: "02/2023",
    endDateT: "experiences.today",
    role: "experiences.db1",
  },
  {
    startDate: "02/2022",
    endDate: "02/2023",
    role: "experiences.lean",
  },
  {
    startDate: "03/2019",
    endDate: "02/2022",
    role: "experiences.sebrae",
  },
  {
    startDate: "01/2018",
    endDate: "03/2019",
    role: "experiences.neki",
  },
  {
    startDate: "09/2018",
    endDate: "09/2019",
    role: "experiences.cashPago",
  },
  {
    startDate: "04/2016",
    endDate: "01/2018",
    role: "experiences.space",
  },
];

const modelPosition = (isMobile: boolean) => {
  if (isMobile) return { value: [0, -1.6, 0], step: 0.1 };
  return { value: [0, -1.6, 0], step: 0.1 };
};
const namePosition = (isMobile: boolean) => {
  if (isMobile) return { value: [3.3, 1, -1.9], step: 0.1 };
  return { value: [3.3, 1, -1.9], step: 0.1 };
};
const nameRotation = (isMobile: boolean) => {
  if (isMobile) return { value: [0, -1, 0], step: 0.1 };
  return { value: [0, -1, 0], step: 0.1 };
};
const nameSize = (isMobile: boolean) => {
  if (isMobile) return { value: 0.65, step: 0.1 };
  return { value: 0.65, step: 0.1 };
};
const nameScale = (isMobile: boolean) => {
  if (isMobile) return { value: 0.65, step: 0.1 };
  return { value: 0.65, step: 0.1 };
};
const surnamePosition = (isMobile: boolean) => {
  if (isMobile) return { value: [2.3, 0.4, -1.8], step: 0.1 };
  return { value: [2.3, 0.4, -1.8], step: 0.1 };
};
const surnameRotation = (isMobile: boolean) => {
  if (isMobile) return { value: [0, -1, 0], step: 0.1 };
  return { value: [0, -1, 0], step: 0.1 };
};
const surnameScale = (isMobile: boolean) => {
  if (isMobile) return { value: 0.65, step: 0.1 };
  return { value: 0.65, step: 0.1 };
};
const surnameSize = (isMobile: boolean) => {
  if (isMobile) return { value: 0.65, step: 0.1 };
  return { value: 0.65, step: 0.1 };
};

export {
  modelPosition,
  namePosition,
  nameRotation,
  nameSize,
  nameScale,
  surnamePosition,
  surnameRotation,
  surnameScale,
  surnameSize,
};
