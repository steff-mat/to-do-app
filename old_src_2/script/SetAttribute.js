export default function SetAttribute(
  targetElement,
  targetAction,
  targetContent
) {
  const element = document.querySelector(targetElement);
  return (element[targetAction] = targetContent);
}
