export default function SetCustom(targetElement, targetAction, targetContent) {
  const element = document.querySelector(targetElement);
  return (element[targetAction] = targetContent);
}
