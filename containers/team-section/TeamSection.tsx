import { Typography } from "@mui/material";
import React from "react";
import { GradientText, TeamMember } from "../../components";
import { TeamMemberList, TeamSectionWrapper } from "./teamSection.styles";

const mockTeamMembers = [
  [
    {
      photoUrl: "/images/team-1.png",
      name: "คุณสมใจนึก เองตระกูล",
      shortName: "(ประธานที่ปรึกษา)",
      position: `ผู้ก่อตั้ง SE Biz Group และประธานกรรมการ, ประธานกรรมการ บริษัท ทิพย กรุ๊ป โฮลดิ้งส์ จำกัด (มหาชน), 
      ประธานกรรมการ บริษัท พลังงานบริสุทธิ์ จำกัด (มหาชน), ประธานและกรรมการ ในบริษัทชั้นนำอื่นๆ ในประเทศไทย            
      `,
    },
  ],
  [
    {
      photoUrl: "/images/team-2.png",
      name: "คุณสินีนารถ เองตระกูล",
      shortName: "(ที่ปรึกษาด้านการตลาด)",
      position: `Founder BB clinic , Founder ESC park 
      Chairman of FG logistics            
      `,
    },
    {
      photoUrl: "/images/team-3.png",
      name: "สิรโสมย์ บริสุทธิ์สุวรรณ์",
      special: "(CEO)",
      position: `Tech startup founder
      CMO The Campus, COO Momchoice,
      Founder U DRINK I DRIVE            
      `,
    },
    {
      photoUrl: "/images/team-4.png",
      name: "คุณธัญญาเรศ เองตระกูล",
      shortName: "(ที่ปรึกษาด้าน Entertainment)",
      position: `ผู้อำนวยการศูนย์วิจัยนวัตกรรมดิจิทัล
      มหาวิทยาลัยนเรศวร
      ผู้เชี่ยวชาญด้าน AI และ Digital Platfrom      
      `,
    },
    {
      photoUrl: "/images/team-5.png",
      name: "คุณอิทธิ อดุลสุทธานนท์",
      special: "(CMO)",
      position: `Mosaic One - Managing Director
      Dai Ichi Kikaku - Digital Director            
      `,
    },
    {
      photoUrl: "/images/team-6.png",
      name: "คุณเพียรจิต สิงหโทราช",
      shortName: "(ที่ปรึกษาด้านวิจัยธุรกิจอุตสาหกรรม)",
      position: `ที่ปรึกษาการค้าการลงทุนธุรกิจทั้งภาครัฐและเอกชน การวิจัยธุรกิจอุตสาหกรรม 
      การจัดทำแผนปฏิบัติงานและแผนยุทธศาสตร์ภาครัฐ 
      และศึกษาความเป็นไปได้ในการดำเนินโครงการต่างๆ ประสบการณ์มากกว่า 33 ปี            
      `,
    },
    {
      photoUrl: "/images/team-7.png",
      name: "ผศ. ดร. รัฐกร พูลทรัพย์",
      special: "(CTO)",
      position: `อาจารย์ประจำสถาบันบัณฑิตพัฒนบริหารศาสตร์ (นิด้า)
      และเป็นที่ปรึกษาให้กับบริษัทต่างๆ จำนวนมาก เช่น 
      บริษัท บิทคับ แคปปิตอล กรุ๊ป โฮลดิ้งส์ จำกัด เป็นต้น            
      `,
    },
    {
      photoUrl: "/images/team-8.png",
      name: "ศ.ดร.ไพศาล มุณีสว่าง",
      shortName: "(ที่ปรึกษาด้านเทคโนโลยี)",
      position: `ผู้อำนวยการศูนย์วิจัยนวัตกรรมดิจิทัล
      มหาวิทยาลัยนเรศวร
      ผู้เชี่ยวชาญด้าน AI และ Digital Platfrom            
      `,
    },
    {
      photoUrl: "/images/team-9.png",
      name: "คุณศิริพร พัชรวัฒน์",
      shortName: "",
      position: `(ที่ปรึกษาด้าน Digital Transformation and Developing (software) Startup Ecosystem)   
      อดีตผู้บริหาร บริษัท ไมโครซอฟต์           
      `,
    },
    {
      photoUrl: "/images/team-10.png",
      name: "คุณขวัญตา สุดแสง",
      shortName: "",
      position: `(ที่ปรึกษาด้านการบริหารจัดการทรัพยากรบุคคล) 
      CEO The Prodigy (Thailand) Co., Ltd.          
      `,
    },
    {
      photoUrl: "/images/team-11.png",
      name: "คุณรุ่งอรุณ สิริวเสรี",
      shortName: "(ที่ปรึกษาด้านกิจกรรมการตลาด)",
      position: `MD 9Brilliant Co., Ltd             
      `,
    },
  ],
];

type TeamSectionProps = {};

const TeamSection: React.FC<TeamSectionProps> = () => {
  return (
    <TeamSectionWrapper>
      {mockTeamMembers?.map((memberGroup, index) => (
        <TeamMemberList key={index}>
          {memberGroup.map((member, indexMember) => (
            <TeamMember
              key={indexMember}
              photoUrl={member.photoUrl}
              name={member.name}
              special={member.special}
              shortName={member.shortName}
              position={member.position}
            />
          ))}
        </TeamMemberList>
      ))}
    </TeamSectionWrapper>
  );
};

TeamSection.defaultProps = {};

export default TeamSection;
