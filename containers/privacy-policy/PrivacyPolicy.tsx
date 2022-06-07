/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import React from "react";
import { ContentWrapper } from "../../components";
import { useTranslation } from "../../hooks";
import privacyPolicyPagei18n from "../../i18n/privacy-policy.i18n";
import {
  PrivacyPolicyContainer,
  PrivacyPolicyWrapper,
  Description,
  ListBullet,
  ItemBullet,
} from "./privacyPolicy.styles";

type PrivacyPolicyProps = {
  isSignUp: boolean;
  onClose?: () => void;
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isSignUp, onClose }) => {
  const { translate } = useTranslation(privacyPolicyPagei18n);
  return (
    <PrivacyPolicyContainer>
      {isSignUp && (
        <img
          onClick={onClose}
          src="/images/close.png"
          alt="/images/close.png"
          width={17}
          height={17}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            cursor: "pointer",
          }}
        />
      )}
      <ContentWrapper>
        <PrivacyPolicyWrapper>
          <Typography variant="h4">
            นโยบายคุ้มครองข้อมูลส่วนบุคคลสำหรับผู้ใช้งาน Fandom Application
          </Typography>
          <Description variant="h6">
            บริษัท แฟนดอม แอพพลิเคชั่น จำกัด
            ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ
            โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม
            ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงสิทธิต่าง ๆ
            ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
          </Description>

          <Typography variant="h5">การเก็บรวบรวมข้อมูลส่วนบุคคล</Typography>
          <Description variant="h6">
            เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง
            ดังต่อไปนี้:
          </Description>
          <ListBullet>
            <ItemBullet>การสมัครสมาชิก</ItemBullet>
            <ItemBullet>โทรศัพท์</ItemBullet>
            <ItemBullet>อีเมล</ItemBullet>
            <ItemBullet>Facebook Login</ItemBullet>
            <ItemBullet>Google Login</ItemBullet>
          </ListBullet>

          <Typography variant="h5">
            ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม
          </Typography>
          <Description variant="h6">
            ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สัญชาติ
            เลขประจำตัวประชาชน หนังสือเดินทาง เป็นต้น
          </Description>
          <Description variant="h6">
            ข้อมูลการติดต่อ เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น
          </Description>
          <Description variant="h6">
            ข้อมูลบัญชี เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น
          </Description>
          <Description variant="h6">
            หลักฐานแสดงตัวตน เช่น สำเนาบัตรประจำตัวประชาชน สำเนาหนังสือเดินทาง
            เป็นต้น
          </Description>
          <Description variant="h6">
            ข้อมูลการทำธุรกรรมและการเงิน เช่น ประวัติการสั่งซื้อ
            รายละเอียดบัตรเครดิต บัญชีธนาคาร เป็นต้น
          </Description>
          <Description variant="h6">
            ข้อมูลทางเทคนิค เช่น IP Address, Cookie ID, ประวัติการใช้งานเว็บไซต์
            (Activity Log) เป็นต้น
          </Description>
          <Description variant="h6"></Description>

          <Description variant="h6">
            ข้อมูลอื่น ๆ เช่น รูปภาพ ภาพเคลื่อนไหว
            และข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
          </Description>

          <Typography variant="h5">
            ข้อมูลอื่นใดที่กระทบต่อข้อมูลส่วนบุคคลของคุณตามที่คณะกรรมการคุ้มครองข้อมูลส่วนบุคคลประกาศกำหนด
          </Typography>
          <Description variant="h6">
            หากคุณมีอายุต่ำกว่า 20 ปีหรือมีข้อจำกัดความสามารถตามกฎหมาย
            เราอาจเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
            เราอาจจำเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทำได้
            หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง
            เราจะดำเนินการลบข้อมูลนั้นออกจากเซิร์ฟเวอร์ของเรา
          </Description>

          <Typography variant="h5">วิธีการเก็บรักษาข้อมูลส่วนบุคคล</Typography>
          <Description variant="h6">
            เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์
          </Description>
          <Description variant="h6">
            เราเก็บรักษาข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้
          </Description>
          <ListBullet>
            <ItemBullet>เซิร์ฟเวอร์บริษัทของเราในประเทศไทย</ItemBullet>
            <ItemBullet>เซิร์ฟเวอร์บริษัทของเราในต่างประเทศ</ItemBullet>
            <ItemBullet>ผู้ให้บริการเซิร์ฟเวอร์ในประเทศไทย</ItemBullet>
            <ItemBullet>ผู้ให้บริการเซิร์ฟเวอร์ในต่างประเทศ</ItemBullet>
          </ListBullet>

          <Typography variant="h5">การประมวลผลข้อมูลส่วนบุคคล</Typography>
          <Description variant="h6">
            เราจะเก็บรวบรวม ใช้
            หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้
          </Description>
          <ListBullet>
            <ItemBullet>เพื่อสร้างและจัดการบัญชีผู้ใช้งาน</ItemBullet>
            <ItemBullet>เพื่อจัดส่งสินค้าหรือบริการ</ItemBullet>
            <ItemBullet>
              เพื่อปรับปรุงสินค้า บริการ หรือประสบการณ์การใช้งาน
            </ItemBullet>
            <ItemBullet>เพื่อการบริหารจัดการภายในบริษัท</ItemBullet>
            <ItemBullet>เพื่อการตลาดและการส่งเสริมการขาย</ItemBullet>
            <ItemBullet>เพื่อการบริการหลังการขาย</ItemBullet>
            <ItemBullet>เพื่อรวบรวมข้อเสนอแนะ</ItemBullet>
            <ItemBullet>เพื่อชำระค่าสินค้าหรือบริการ</ItemBullet>
            <ItemBullet>
              เพื่อปฏิบัติตามข้อตกลงและเงื่อนไข (Terms and Conditions)
            </ItemBullet>
            <ItemBullet>
              เพื่อปฏิบัติตามกฎหมายและกฎระเบียบของหน่วยงานราชการ
            </ItemBullet>
          </ListBullet>

          <Typography variant="h5">การเปิดเผยข้อมูลส่วนบุคคล</Typography>
          <Description variant="h6">
            เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่ผู้อื่นภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้
            ดังต่อไปนี้
          </Description>

          <Typography variant="h5">การบริหารจัดการภายในองค์กร</Typography>
          <Description variant="h6">
            เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณภายในบริษัทเท่าที่จำเป็นเพื่อปรับปรุงและพัฒนาสินค้าหรือบริการของเรา
            เราอาจรวบรวมข้อมูลภายในสำหรับสินค้าหรือบริการต่าง ๆ
            ภายใต้นโยบายนี้เพื่อประโยชน์ของคุณและผู้อื่นมากขึ้น
          </Description>

          <Typography variant="h5">ผู้ให้บริการ</Typography>
          <Description variant="h6">
            {translate("SERVICE_PROVIDERS_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("BUSINESS_PARTNERS")}</Typography>
          <Description variant="h6">
            เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณบางอย่างให้กับผู้ให้บริการของเราเท่าที่จำเป็นเพื่อดำเนินงานในด้านต่าง
            ๆ เช่น การชำระเงิน การตลาด การพัฒนาสินค้าหรือบริการ เป็นต้น ทั้งนี้
            ผู้ให้บริการมีนโยบายความเป็นส่วนตัวของตนเอง
          </Description>

          <Typography variant="h5">พันธมิตรทางธุรกิจ</Typography>
          <Description variant="h6">
            เราอาจเปิดเผยข้อมูลบางอย่างกับพันธมิตรทางธุรกิจเพื่อติดต่อและประสานงานในการให้บริการสินค้าหรือบริการ
            และให้ข้อมูลเท่าที่จำเป็นเกี่ยวกับความพร้อมใช้งานของสินค้าหรือบริการ
          </Description>

          <Typography variant="h5">สิทธิของเจ้าของข้อมูลส่วนบุคคล</Typography>
          <Description variant="h6">
            ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล
            คุณมีสิทธิในการดำเนินการดังต่อไปนี้
          </Description>
          <Description variant="h6">
            สิทธิขอถอนความยินยอม (right to withdraw consent)
            หากคุณได้ให้ความยินยอม เราจะเก็บรวบรวม ใช้
            หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
            ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น
            คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา
          </Description>
          <Description variant="h6">
            สิทธิขอเข้าถึงข้อมูล (right to access)
            คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของเราและขอให้เราทำสำเนาข้อมูลดังกล่าวให้แก่คุณ
            รวมถึงขอให้เราเปิดเผยว่าเราได้ข้อมูลส่วนบุคคลของคุณมาได้อย่างไร
          </Description>
          <Description variant="h6">
            สิทธิขอถ่ายโอนข้อมูล (right to data portability)
            คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในกรณีที่เราได้จัดทำข้อมูลส่วนบุคคลนั้นอยู่ในรูปแบบให้สามารถอ่านหรือใช้งานได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทำงานได้โดยอัตโนมัติและสามารถใช้หรือเปิดเผยข้อมูลส่วนบุคคลได้ด้วยวิธีการอัตโนมัติ
            รวมทั้งมีสิทธิขอให้เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นเมื่อสามารถทำได้ด้วยวิธีการอัตโนมัติ
            และมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นโดยตรง
            เว้นแต่ไม่สามารถดำเนินการได้เพราะเหตุทางเทคนิค
          </Description>
          <Description variant="h6">
            สิทธิขอคัดค้าน (right to object) คุณมีสิทธิขอคัดค้านการเก็บรวบรวม
            ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณในเวลาใดก็ได้ หากการเก็บรวบรวม
            ใช้
            หรือเปิดเผยข้อมูลส่วนบุคคลของคุณที่ทำขึ้นเพื่อการดำเนินงานที่จำเป็นภายใต้ประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลหรือนิติบุคคลอื่น
            โดยไม่เกินขอบเขตที่คุณสามารถคาดหมายได้อย่างสมเหตุสมผลหรือเพื่อดำเนินการตามภารกิจเพื่อสาธารณประโยชน์
          </Description>
          <Description variant="h6">
            สิทธิขอให้ลบหรือทำลายข้อมูล (right to erasure/destruction)
            คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณหรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้
            หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม ใช้
            หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้
            หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว
          </Description>
          <Description variant="h6">
            สิทธิขอให้ระงับการใช้ข้อมูล (right to restriction of processing)
            คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคำร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจำเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทน
          </Description>
          <Description variant="h6">
            สิทธิขอให้แก้ไขข้อมูล (right to rectification)
            คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของคุณให้ถูกต้อง เป็นปัจจุบัน
            สมบูรณ์ และไม่ก่อให้เกิดความเข้าใจผิด
          </Description>
          <Description variant="h6">
            สิทธิร้องเรียน (right to lodge a complaint)
            คุณมีสิทธิร้องเรียนต่อผู้มีอำนาจตามกฎหมายที่เกี่ยวข้อง
            หากคุณเชื่อว่าการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
            เป็นการกระทำในลักษณะที่ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายที่เกี่ยวข้อง
          </Description>
          <Description variant="h6">
            คุณสามารถใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคลข้างต้นได้
            โดยติดต่อมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราตามรายละเอียดท้ายนโยบายนี้
            เราจะแจ้งผลการดำเนินการภายในระยะเวลา 30 วัน
            นับแต่วันที่เราได้รับคำขอใช้สิทธิจากคุณ
            ตามแบบฟอร์มหรือวิธีการที่เรากำหนด ทั้งนี้
            หากเราปฏิเสธคำขอเราจะแจ้งเหตุผลของการปฏิเสธให้คุณทราบผ่านช่องทางต่าง
            ๆ เช่น ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น
          </Description>

          <Typography variant="h5">
            เทคโนโลยีติดตามตัวบุคคล (Cookies)
          </Typography>
          <Description variant="h6">
            เพื่อเพิ่มประสบการณ์การใช้งานของคุณให้สมบูรณ์และมีประสิทธิภาพมากขึ้น
            เราใช้คุกกี้ (Cookies)หรือเทคโนโลยีที่คล้ายคลึงกัน
            เพื่อพัฒนาการเข้าถึงสินค้าหรือบริการ โฆษณาที่เหมาะสม
            และติดตามการใช้งานของคุณ
            เราใช้คุกกี้เพื่อระบุและติดตามผู้ใช้งานเว็บไซต์และการเข้าถึงเว็บไซต์ของเรา
            หากคุณไม่ต้องการให้มีคุกกี้ไว้ในคอมพิวเตอร์ของคุณ
            คุณสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธคุกกี้ก่อนที่จะใช้เว็บไซต์ของเราได้
          </Description>

          <Typography variant="h5">
            การรักษาความมั่งคงปลอดภัยของข้อมูลส่วนบุคคล
          </Typography>
          <Description variant="h6">
            เราจะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ
            การรักษาความลับ (confidentiality) ความถูกต้องครบถ้วน (integrity)
            และสภาพพร้อมใช้งาน (availability) ทั้งนี้ เพื่อป้องกันการสูญหาย
            เข้าถึง ใช้ เปลี่ยนแปลง แก้ไข หรือเปิดเผย
            นอกจากนี้เราจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล
            ซึ่งครอบคลุมถึงมาตรการป้องกันด้านการบริหารจัดการ (administrative
            safeguard) มาตรการป้องกันด้านเทคนิค (technical safeguard)
            และมาตรการป้องกันทางกายภาพ (physical safeguard)
            ในเรื่องการเข้าถึงหรือควบคุมการใช้งานข้อมูลส่วนบุคคล (access
            control)
          </Description>

          <Typography variant="h5">การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล</Typography>
          <Description variant="h6">
            ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น
            เราจะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน
            72 ชั่วโมง นับแต่ทราบเหตุเท่าที่สามารถกระทำได้
            ในกรณีที่การละเมิดมีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิและเสรีภาพของคุณ
            เราจะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยาโดยไม่ชักช้าผ่านช่องทางต่าง
            ๆ เช่น เว็บไซต์ ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น
          </Description>

          <Typography variant="h5">
            ผลกระทบที่อาจเกิดขึ้นกรณีปฏิเสธการให้ความยินยอมในการรวบรวม ใช้
            หรือเปิดเผยข้อมูลส่วนบุคคล
          </Typography>
          <Description variant="h6">
            กรณีที่ท่านไม่ยินยอมให้เรารวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล
            อาจส่งผลกระทบต่อความสะดวกของท่านในการรับบริการจากเรา
            หรือเข้าถึงการให้บริการของเรา อย่างเต็มรูปแบบ
          </Description>

          <Typography variant="h5">
            การแก้ไขเปลี่ยนแปลงนโยบายความเป็นส่วนตัว
          </Typography>
          <Description variant="h6">
            เราอาจแก้ไขเปลี่ยนแปลงนโยบายนี้เป็นครั้งคราว
            โดยคุณสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของเรา
            นโยบายนี้แก้ไขล่าสุดและมีผลใช้บังคับตั้งแต่วันที่ 27 กรกฎาคม 2564
          </Description>

          <Typography variant="h5">
            นโยบายความเป็นส่วนตัวของเว็บไซต์อื่น
          </Typography>
          <Description variant="h6">
            นโยบายความเป็นส่วนตัวฉบับนี้ใช้สำหรับการเสนอสินค้า บริการ
            และการใช้งานบนเว็บไซต์สำหรับลูกค้าของเราเท่านั้น
            หากคุณเข้าชมเว็บไซต์อื่นแม้จะผ่านช่องทางเว็บไซต์ของเรา
            การคุ้มครองข้อมูลส่วนบุคคลต่าง ๆ
            จะเป็นไปตามนโยบายความเป็นส่วนตัวของเว็บไซต์นั้น
            ซึ่งเราไม่มีส่วนเกี่ยวข้องด้วย
          </Description>

          <Typography variant="h5">รายละเอียดการติดต่อ</Typography>
          <Description variant="h6">
            หากคุณต้องการสอบถามข้อมูลเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้
            รวมถึงการขอใช้สิทธิต่าง ๆ
            คุณสามารถติดต่อเราหรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราได้
            ดังนี้
          </Description>

          <Typography variant="h5">ผู้ควบคุมข้อมูลส่วนบุคคล</Typography>
          <Description variant="h6">
            บริษัท แฟนดอม แอพพลิเคชั่น จำกัด
          </Description>

          <Typography variant="h5">
            เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล
          </Typography>
          <Description variant="h6">ศุภิสรัตน์ แก้ววุฒิ</Description>
          <Description variant="h6">
            7/1 ถนนวัชรพล แขวงท่าแร้ง เขตบางเขน กทม. 10220
          </Description>
          <Description variant="h6">อีเมล admin@fandom.co.th</Description>
          {/* <Typography variant="h4">{translate("TITLE")}</Typography>
          <Description variant="h6">{translate("DESCRIPTION")}</Description>

          <Typography variant="h5">{translate("COLLECTION")}</Typography>
          <Description variant="h6">
            {translate("COLLECTION_DESCRIPTION")}
          </Description>
          <ListBullet>
            <ItemBullet>{translate("COLLECTION_1")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_2")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_3")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_4")}</ItemBullet>
            <ItemBullet>{translate("COLLECTION_5")}</ItemBullet>
          </ListBullet>

          <Typography variant="h5">{translate("TYPES_OF_DATA")}</Typography>
          <Description variant="h6">{translate("TYPES_OF_DATA_1")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_2")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_3")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_4")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_5")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_6")}</Description>
          <Description variant="h6">{translate("TYPES_OF_DATA_7")}</Description>

          <Description variant="h6">{translate("TYPES_OF_DATA_9")}</Description>

          <Typography variant="h5">{translate("CHILDREN")}</Typography>
          <Description variant="h6">
            {translate("CHILDREN_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("STORAGE_OF_DATA")}</Typography>
          <Description variant="h6">
            {translate("STORAGE_OF_DATA_DESCRIPTION_1")}
          </Description>
          <Description variant="h6">
            {translate("STORAGE_OF_DATA_DESCRIPTION_2")}
          </Description>
          <ListBullet>
            <ItemBullet>{translate("STORAGE_OF_DATA_TYPE_1")}</ItemBullet>
            <ItemBullet>{translate("STORAGE_OF_DATA_TYPE_2")}</ItemBullet>
            <ItemBullet>{translate("STORAGE_OF_DATA_TYPE_3")}</ItemBullet>
            <ItemBullet>{translate("STORAGE_OF_DATA_TYPE_4")}</ItemBullet>
          </ListBullet>

          <Typography variant="h5">{translate("USE_OF_DATA")}</Typography>
          <Description variant="h6">
            {translate("USE_OF_DATA_DESCRIPTION")}
          </Description>
          <ListBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_1")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_2")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_3")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_4")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_5")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_6")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_7")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_8")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_9")}</ItemBullet>
            <ItemBullet>{translate("USE_OF_DATA_TYPE_10")}</ItemBullet>
          </ListBullet>

          <Typography variant="h5">
            {translate("DISCLOSURE_OF_PERSONAL_DATA")}
          </Typography>
          <Description variant="h6">
            {translate("DISCLOSURE_OF_PERSONAL_DATA_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("ORGANIZATION")}</Typography>
          <Description variant="h6">
            {translate("ORGANIZATION_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("SERVICE_PROVIDERS")}</Typography>
          <Description variant="h6">
            {translate("SERVICE_PROVIDERS_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("BUSINESS_PARTNERS")}</Typography>
          <Description variant="h6">
            {translate("BUSINESS_PARTNERS_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("DATA_RETENTION")}</Typography>
          <Description variant="h6">
            {translate("DATA_RETENTION_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("DATA_SUBJECT_RIGHTS")}
          </Typography>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_1")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_2")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_3")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_4")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_5")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_6")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_7")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_8")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_9")}
          </Description>
          <Description variant="h6">
            {translate("DATA_SUBJECT_RIGHTS_DESCRIPTION_10")}
          </Description>

          <Typography variant="h5">{translate("COOKIES")}</Typography>
          <Description variant="h6">
            {translate("COOKIES_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("DATA_SECURITY")}</Typography>
          <Description variant="h6">
            {translate("DATA_SECURITY_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("DATA_BREACH_NOTIFICATION")}
          </Typography>
          <Description variant="h6">
            {translate("DATA_BREACH_NOTIFICATION_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("EFFECT")}</Typography>
          <Description variant="h6">
            {translate("EFFECT_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("CHANGES_TO_THIS_PRIVACY_POLICY")}
          </Typography>
          <Description variant="h6">
            {translate("CHANGES_TO_THIS_PRIVACY_POLICY_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("LINKS_TO_OTHER_SITES")}
          </Typography>
          <Description variant="h6">
            {translate("LINKS_TO_OTHER_SITES_DESCRIPTION")}
          </Description>

          <Typography variant="h5">
            {translate("CONTACT_INFORMATION")}
          </Typography>
          <Description variant="h6">
            {translate("CONTACT_INFORMATION_DESCRIPTION")}
          </Description>

          <Typography variant="h5">{translate("DATA_CONTROLLER")}</Typography>
          <Description variant="h6">
            {translate("DATA_CONTROLLER_DESCRIPTION_1")}
          </Description>

          <Typography variant="h5">
            {translate("DATA_PROTECTION_OFFICER")}
          </Typography>
          <Description variant="h6">
            {translate("DATA_PROTECTION_OFFICER_DESCRIPTION_1")}
          </Description>
          <Description variant="h6">
            {translate("DATA_PROTECTION_OFFICER_DESCRIPTION_2")}
          </Description>
          <Description variant="h6">
            {translate("DATA_PROTECTION_OFFICER_DESCRIPTION_3")}
          </Description> */}
        </PrivacyPolicyWrapper>
      </ContentWrapper>
    </PrivacyPolicyContainer>
  );
};

PrivacyPolicy.defaultProps = {};

export default PrivacyPolicy;
