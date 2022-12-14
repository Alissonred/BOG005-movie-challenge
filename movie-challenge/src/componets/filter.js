import React, { useState } from "react";
import './styles.css'

const FilterComponent = ({ filterTypeHandle, filterInput, setFilterInputHandle }) => {

    return (
        <div>
            <select required onChange={(event)=>filterTypeHandle(event,'Type')}>
                <option value=''>Tipo </option>
                <option value='movie'>Película</option>
                <option value='series'>Serie</option>
            </select>

         <section className="gendryOptiosContainer" onClick={(event)=>filterTypeHandle(event,'Genre')}>
            <label > <input type='checkbox' value='Drama' name="drama"/>Drama </label>
            <label > <input type='checkbox' value='Romance' name="drama"/>Romance </label>
            <label > <input type='checkbox' value='Action' name="drama"/>Acción </label>
            <label > <input type='checkbox' value='Sci-Fi' name="drama"/>Ciencia Ficción </label>
            <label > <input type='checkbox' value='Comedy' name="drama"/>Comedia </label>
            <label > <input type='checkbox' value='Horror' name="drama"/>Terror</label>
            <label > <input type='checkbox' value='Aventure' name="drama"/>Aventura </label>
            <label > <input type='checkbox' value='Suspence' name="drama"/>Suspenso </label>
            <label > <input type='checkbox' value='Documentary' name="drama"/>Documental</label>
            <label > <input type='checkbox' value='Crime' name="drama"/>Crimen</label>
        </section>


            <input list="listCountries"
                type='text'
                placeholder='Pais'
                /* value={filterInput}*/
                onChange={(event)=>filterTypeHandle(event,'Country')}
                required
            ></input>

            <datalist id="listCountries" onChange={(event)=>filterTypeHandle(event,'Country')}>
                <option value=''>Todos Los paises</option>
                <option value="Afghanistan">Afganistán</option>
                <option value="Albania">Albania</option>
                <option value="Germany">Alemania</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antártida</option>
                <option value="Antigua and Barbuda">Antigua y Barbuda</option>
                <option value="AN">Antillas Holandesas</option>
                <option value="SA">Arabia Saudí</option>
                <option value="DZ">Argelia</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="AZ">Azerbaiyán</option>
                <option value="Bahamas">Bahamas</option>
                <option value="BH">Bahrein</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="Belgium">Bélgica</option>
                <option value="Belize">Belice</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermudas</option>
                <option value="BY">Bielorrusia</option>
                <option value="MM">Birmania</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia y Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="Brazil">Brasil</option>
                <option value="BN">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="BT">Bután</option>
                <option value="CV">Cabo Verde</option>
                <option value="KH">Camboya</option>
                <option value="CM">Camerún</option>
                <option value="Canada">Canadá</option>
                <option value="TD">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="CY">Chipre</option>
                <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
                <option value="Colombia">Colombia</option>
                <option value="KM">Comores</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, República Democrática del</option>
                <option value="KR">Corea</option>
                <option value="KP">Corea del Norte</option>
                <option value="CI">Costa de Marfíl</option>
                <option value="CR">Costa Rica</option>
                <option value="HR">Croacia (Hrvatska)</option>
                <option value="CU">Cuba</option>
                <option value="Denmark">Dinamarca</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egipto</option>
                <option value="SV">El Salvador</option>
                <option value="AE">Emiratos Árabes Unidos</option>
                <option value="ER">Eritrea</option>
                <option value="SI">Eslovenia</option>
                <option value="Spain">España</option>
                <option value="United States">Estados Unidos</option>
                <option value="Estonia">Estonia</option>
                <option value="ET">Etiopía</option>
                <option value="FJ">Fiji</option>
                <option value="PH">Filipinas</option>
                <option value="FI">Finlandia</option>
                <option value="France">Francia</option>
                <option value="GA">Gabón</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GD">Granada</option>
                <option value="GR">Grecia</option>
                <option value="GL">Groenlandia</option>
                <option value="GP">Guadalupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GY">Guayana</option>
                <option value="GF">Guayana Francesa</option>
                <option value="GN">Guinea</option>
                <option value="GQ">Guinea Ecuatorial</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="HT">Haití</option>
                <option value="HN">Honduras</option>
                <option value="HU">Hungría</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IQ">Irak</option>
                <option value="IR">Irán</option>
                <option value="IE">Irlanda</option>
                <option value="BV">Isla Bouvet</option>
                <option value="CX">Isla de Christmas</option>
                <option value="IS">Islandia</option>
                <option value="KY">Islas Caimán</option>
                <option value="CK">Islas Cook</option>
                <option value="CC">Islas de Cocos o Keeling</option>
                <option value="FO">Islas Faroe</option>
                <option value="HM">Islas Heard y McDonald</option>
                <option value="FK">Islas Malvinas</option>
                <option value="MP">Islas Marianas del Norte</option>
                <option value="MH">Islas Marshall</option>
                <option value="UM">Islas menores de Estados Unidos</option>
                <option value="PW">Islas Palau</option>
                <option value="SB">Islas Salomón</option>
                <option value="SJ">Islas Svalbard y Jan Mayen</option>
                <option value="TK">Islas Tokelau</option>
                <option value="TC">Islas Turks y Caicos</option>
                <option value="VI">Islas Vírgenes (EEUU)</option>
                <option value="VG">Islas Vírgenes (Reino Unido)</option>
                <option value="WF">Islas Wallis y Futuna</option>
                <option value="IL">Israel</option>
                <option value="IT">Italia</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japón</option>
                <option value="JO">Jordania</option>
                <option value="KZ">Kazajistán</option>
                <option value="KE">Kenia</option>
                <option value="KG">Kirguizistán</option>
                <option value="KI">Kiribati</option>
                <option value="KW">Kuwait</option>
                <option value="LA">Laos</option>
                <option value="LS">Lesotho</option>
                <option value="LV">Letonia</option>
                <option value="LB">Líbano</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libia</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lituania</option>
                <option value="LU">Luxemburgo</option>
                <option value="MK">Macedonia, Ex-República Yugoslava de</option>
                <option value="MG">Madagascar</option>
                <option value="MY">Malasia</option>
                <option value="MW">Malawi</option>
                <option value="MV">Maldivas</option>
                <option value="ML">Malí</option>
                <option value="MT">Malta</option>
                <option value="MA">Marruecos</option>
                <option value="MQ">Martinica</option>
                <option value="MU">Mauricio</option>
                <option value="MR">Mauritania</option>
                <option value="YT">Mayotte</option>
                <option value="MX">México</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldavia</option>
                <option value="MC">Mónaco</option>
                <option value="MN">Mongolia</option>
                <option value="MS">Montserrat</option>
                <option value="MZ">Mozambique</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Níger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk</option>
                <option value="NO">Noruega</option>
                <option value="NC">Nueva Caledonia</option>
                <option value="NZ">Nueva Zelanda</option>
                <option value="OM">Omán</option>
                <option value="NL">Países Bajos</option>
                <option value="PA">Panamá</option>
                <option value="PG">Papúa Nueva Guinea</option>
                <option value="PK">Paquistán</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Perú</option>
                <option value="PN">Pitcairn</option>
                <option value="PF">Polinesia Francesa</option>
                <option value="PL">Polonia</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="United Kingdom">Reino Unido</option>
                <option value="CF">República Centroafricana</option>
                <option value="CZ">República Checa</option>
                <option value="ZA">República de Sudáfrica</option>
                <option value="DO">República Dominicana</option>
                <option value="SK">República Eslovaca</option>
                <option value="RE">Reunión</option>
                <option value="RW">Ruanda</option>
                <option value="RO">Rumania</option>
                <option value="RU">Rusia</option>
                <option value="EH">Sahara Occidental</option>
                <option value="KN">Saint Kitts y Nevis</option>
                <option value="WS">Samoa</option>
                <option value="AS">Samoa Americana</option>
                <option value="SM">San Marino</option>
                <option value="VC">San Vicente y Granadinas</option>
                <option value="SH">Santa Helena</option>
                <option value="LC">Santa Lucía</option>
                <option value="ST">Santo Tomé y Príncipe</option>
                <option value="SN">Senegal</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leona</option>
                <option value="SG">Singapur</option>
                <option value="SY">Siria</option>
                <option value="SO">Somalia</option>
                <option value="LK">Sri Lanka</option>
                <option value="PM">St Pierre y Miquelon</option>
                <option value="SZ">Suazilandia</option>
                <option value="SD">Sudán</option>
                <option value="SE">Suecia</option>
                <option value="CH">Suiza</option>
                <option value="SR">Surinam</option>
                <option value="TH">Tailandia</option>
                <option value="TW">Taiwán</option>
                <option value="TZ">Tanzania</option>
                <option value="TJ">Tayikistán</option>
                <option value="TF">Territorios franceses del Sur</option>
                <option value="TP">Timor Oriental</option>
                <option value="TG">Togo</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad y Tobago</option>
                <option value="TN">Túnez</option>
                <option value="TM">Turkmenistán</option>
                <option value="Turkey">Turquía</option>
                <option value="TV">Tuvalu</option>
                <option value="Ukraine">Ucrania</option>
                <option value="UG">Uganda</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistán</option>
                <option value="VU">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="YE">Yemen</option>
                <option value="YU">Yugoslavia</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabue</option>
            </datalist>

            <input list="listLanguages"
                type='text'
                placeholder='Idioma'
                onChange={(event)=>filterTypeHandle(event,'Language')}
                required
            ></input>

            <datalist id="listLanguages" onChange={(event)=>filterTypeHandle(event,'Language')}>
            <option value="Afrikaans">Afrikaans</option>
            <option value="Albanian">Albanés</option>
            <option value="Arabic">Arabe</option>
            <option value="Albanian">Albanés</option>
            <option value="Afrikaans">Afrikaans</option>
            <option value="Spanish">Español</option>
            <option value="French">Francés</option>
            <option value="English">Inglés</option>
            <option value="Italian">Italiano</option>
            <option value="Japanese">Japones</option>
            <option value="Portuguese">Portugués</option>
            <option value="Turkish">Turco</option>
            </datalist>

        </div>
    )
}
export default FilterComponent

