import React, { Component } from 'react';

// prettier-ignore
const areaCodes=['201','202','203','205','206','207','208','209','210','212','213','214','215','216','217','218','219','220','223','224','225','228','229','231','234','239','240','248','251','252','253','254','256','260','262','267','269','270','272','276','279','281','301','302','303','304','305','307','308','309','310','312','313','314','315','316','317','318','319','320','321','323','325','326', '327', '330','331','332','334','336','337','339','340', '341', '346','347','351','352','360','361','364','380','385','386','401','402','404','405','406','407','408','409','410','412','413','414','415','417','419','423','424','425','430','432','434','435','440','442','443','445','447', '458','463','469','470','475','478','479','480','484','501','502','503','504','505','507','508','509','510','512','513','515','516','517','518','520','530','531','534','539','540','541','551','559','561','562','563','564','567','570','571','573','574','575','580','585','586','601','602','603','605','606','607','608','609','610','612','614','615','616','617','618','619','620','623','626','628','629','630','631','636','640','641','646','650','651','657', '659', '660','661','662','667','669','670','671','678','680','681','682','684','701','702','703','704','706','707','708','712','713','714','715','716','717','718','719','720','724','725','726','727','731','732','734','737','740','743','747','754','757','760','762','763','765','769','770','772','773','774','775','779','781','785','786','787','801','802','803','804','805','806','808','810','812','813','814','815','816','817','818','820','828','830','831','832','838', '839', '843','845','847','848','850','854','856','857','858','859','860','862','863','864','865','870','872','878','901','903','904','906','907','908','909','910','912','913','914','915','916','917','918','919','920','925','928','929','930','931','934','936','937','938','939','940','941','947','949','951','952','954','956','959','970','971','972','973','978','979','980','984','985','986','989'
]

class GeneratePhone extends Component {
  state = {
    phone: '(985) 867-5309',
    phoneUnformatted: '9858675309',
    checked: false
  };

  randNumbers = length => {
    let text = '';
    const possible = '0123456789';
    for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  callback = () => {
    this.state.checked ? navigator.clipboard.writeText(this.state.phoneUnformatted) : navigator.clipboard.writeText(this.state.phone);
  };

  onCheck = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  generate = () => {
    const areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
    const prefix = this.randNumbers(3);
    const lastFour = this.randNumbers(4);
    this.setState(
      {
        phone: `(${areaCode}) ${prefix}-${lastFour}`,
        phoneUnformatted: `${areaCode}${prefix}${lastFour}`
      },
      this.callback
    );
    console.log(this.state.phone);
  };

  render() {
    return (
      <div>
        <div className="container" style={this.containerStyles}>
          <h3 className="header">CakeKiller's Phone Number Generator</h3>
          <h2>{this.state.checked ? this.state.phoneUnformatted : this.state.phone}</h2>
          <label className="checkbox-container">
            Format?
            <input type="checkbox" onClick={this.onCheck} checked={!this.state.checked} />
            <span className="checkmark"></span>
          </label>
          <button onClick={this.generate}>Generate New Phone Number</button>
        </div>
      </div>
    );
  }
}

export default GeneratePhone;
