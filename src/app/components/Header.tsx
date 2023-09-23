import HeaderButton from "./HeaderButton";
import HeaderInput from "./HeaderInput";
import { HeaderButtons } from "../enums/enums";

function Header() {
  return (
    <div className="flex mx-10 my-10 justify-between">
      <h1>GoodRecipes</h1>
      <HeaderInput />
      <section className="flex gap-4">
        <HeaderButton iconName={HeaderButtons.FRIDGE} />
        <HeaderButton iconName={HeaderButtons.BLOG} />
        <HeaderButton iconName={HeaderButtons.FAVORITES} />
        <HeaderButton iconName={HeaderButtons.PROFILE} />
      </section>
    </div>
  );
}

export default Header;
