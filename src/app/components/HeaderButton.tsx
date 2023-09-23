function HeaderButton({ iconName }: { iconName: string }) {
  return (
    <button className="p5 hover:scale-125">
      <img src={`./${iconName}.svg`} width={30} height={30} />
    </button>
  );
}

export default HeaderButton;
