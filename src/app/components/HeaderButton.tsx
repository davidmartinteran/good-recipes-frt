function HeaderButton({ iconName }: { iconName: string }) {
  return (
    <button>
      <img src={`./${iconName}.svg`} />
    </button>
  );
}

export default HeaderButton;
