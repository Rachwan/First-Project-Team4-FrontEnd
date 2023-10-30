import style from './sidebar.module.css';
const Sidebar = () => {
    return (
        <div  className={style.sidebar}>
        <h2>FILTERS</h2>
        <div className={style.check}>
            <div className={style.price}>
            <p>PRICE </p><br></br>
            <ul className={style.checklist}>
                <li>
                    <input type="checkbox" id="0$-15$" />
                    <label for="0$-15$">0$-15$</label>
                </li>
                <li>
                    <input type="checkbox" id="15$-30$"/>
                    <label for="15$-30$">15$-30$</label>
                </li>
                <li>
                    <input type="checkbox" id="30$-45$"/>
                    <label for="30$-45$">30$-45$</label>
                </li>
                <li>
                    <input type="checkbox" id="45+"/>
                    <label for="45+">45+</label>
                </li>
            </ul>
    </div>
    <div className={style.brand}>
            <p>BRANDS</p><br></br>
            <ul   className={style.checklist}>
                <li>
                    <input type="checkbox" id="ZARA"/>
                    <label for="ZARA">ZARA</label>
                </li>
                <li>
                    <input type="checkbox" id="H&M"/>
                    <label for="H&M">H&M</label>
                </li>
                <li>
                    <input type="checkbox" id="Bershka"/>
                    <label for="Bershka">Bershka</label>
                </li>
                <li>
                    <input type="checkbox" id="Mango"/>
                    <label for="Mango">Mango</label>
                </li>
                <li>
                    <input type="checkbox" id="Shein"/>
                    <label for="Shein">Shein</label>
                </li>
            </ul>
    </div>
    <div>
            <p>CATEGORIES</p><br></br>
            <ul className={style.checklist}>
                <li>
                    <input type="checkbox" id="Dresses"/>
                    <label for="Dresses">Dresses</label>
                </li>
                <li>
                    <input type="checkbox" id="Tops"/>
                    <label for="Tops">Tops</label>
                </li>
                <li>
                    <input type="checkbox" id="Shirts"/>
                    <label for="Shirts">Shirts</label>
                </li>
                <li>
                    <input type="checkbox" id="Hoodies"/>
                    <label for="item6">Hoodies</label>
                </li>
                <li>
                    <input type="checkbox" id="Jackets"/>
                    <label for="Jackets">Jackets</label>
                </li>
                <li>
                    <input type="checkbox" id="Pants"/>
                    <label for="Pants">Pants</label>
                </li>
                <li>
                    <input type="checkbox" id="Suits&Blazers"/>
                    <label for="Suits&Blazers">Suits&Blazers</label>
                </li>
                <li>
                    <input type="checkbox" id="Shorts"/>
                    <label for="Shorts">Shorts</label>
                </li>
                <li>
                    <input type="checkbox" id="Skirts"/>
                    <label for="Skirts">Skirts</label>
                </li>
            </ul>
    </div>
    <div className={style.size}>
            <p>SIZE</p><br></br>
            <ul className={style.checklist}>
                <li>
                    <input type="checkbox" id="Small"/>
                    <label for="Small">Small</label>
                </li>
                <li>
                    <input type="checkbox" id="Medium"/>
                    <label for="Medium">Medium</label>
                </li>
                <li>
                    <input type="checkbox" id="Large"/>
                    <label for="Large">Large</label>
                </li>
                <li>
                    <input type="checkbox" id="X-Large"/>
                    <label for="X-Large">X-Large</label>
                </li>
            </ul>
    </div>
    <div className={style.color}>
            <p>COLOR</p><br></br>
            <ul className={style.checklist}>
                <li>
                    <input type="checkbox" id="Black"/>
                    <label for="Black">Black</label>
                </li>
                <li>
                    <input type="checkbox" id="White"/>
                    <label for="White">White</label>
                </li>
                <li>
                    <input type="checkbox" id="Pink"/>
                    <label for="Pink">Pink</label>
                </li>
                <li>
                    <input type="checkbox" id="Blue"/>
                    <label for="Blue">Blue</label>
                </li>
            </ul>
        </div>
    </div>
    </div>
    )
}
export default Sidebar;