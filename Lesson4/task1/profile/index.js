export const printProfile = profileData => {
  console.log('implementation for printProfile');
  const { name, company } = profileData;
  console.log(`${name} from ${company}`);
};