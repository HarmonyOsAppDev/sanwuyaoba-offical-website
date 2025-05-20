import React, { useEffect, useState } from 'react';
import './styles.css';

interface ContentProps {
  display: string;
}

const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = useState<'english' | 'chinese'>('chinese');

  useEffect(() => {
    // const userLang = navigator.language;
    // if (userLang.startsWith('zh-CN')) {
    //   setLanguage('chinese');
    // } else {
    //   setLanguage('english');
    // }
    setLanguage('chinese');
  }, []);

  const showContent = (lang: 'english' | 'chinese') => {
    setLanguage(lang);
  };

  return (
    <div className="container">
      <div className="language-toggle">
      <button 
          className="language-button"
          onClick={() => showContent('chinese')}
          style={{
            background: language === 'chinese' ? 'black' : 'white',
            color: language === 'chinese' ? 'white' : 'black'
          }}
        >
          中文
        </button>
        <button 
          className="language-button"
          onClick={() => showContent('english')}
          style={{
            background: language === 'english' ? 'black' : 'white',
            color: language === 'english' ? 'white' : 'black'
          }}
        >
          English
        </button>
      </div>

      <div className="content" style={{ display: language === 'chinese' ? 'block' : 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>知微宇宙用户服务协议</h1>
        
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>1.概述</h2>
          <p>欢迎您使用"知微宇宙"软件及相关服务！"知微宇宙"软件及相关服务，系指深圳市叁伍幺发科技有限公司（以下简称"公司"）合法拥有并运营的、标注名称为"知微宇宙"的客户端应用程序以及相关网站（http://sanwuyaoba.com/）向您提供的产品与服务，包括但不限于个性化音视频推荐、发布信息、互动交流、搜索查询等核心功能及其他功能。</p>
          <p>《"知微宇宙"用户服务协议》（以下称"本协议"）是您与公司就您下载、安装、注册、登录、使用（以下统称"使用"）"知微宇宙"软件，并获得"知微宇宙"软件提供的相关服务所订立的协议。</p>
          <p>为了更好地为您提供服务，请您在开始使用"知微宇宙"软件及相关服务之前，认真阅读并充分理解本协议，特别是涉及免除或者限制责任的条款、权利许可和信息使用的条款、同意开通和使用特殊单项服务的条款、法律适用和争议解决条款等。</p>
          <p>如您未满18周岁，请您在法定监护人陪同下仔细阅读并充分理解本协议，并征得法定监护人的同意后使用"知微宇宙"软件及相关服务。</p>
          <p>如您不同意本协议，这将导致公司无法为您提供完整的产品和服务，您也可以选择停止使用。如您自主选择同意或使用"知微宇宙"软件及相关服务，则视为您已充分理解本协议，并同意作为本协议的一方当事人接受本协议以及其他与"知微宇宙"软件及相关服务相关的协议和规则（包括但不限于《"知微宇宙"隐私政策》）的约束。</p>
          <p>公司有权依"知微宇宙"软件及相关服务或运营的需要单方决定，安排或指定其关联方、控制公司、继承公司或公司认可的第三方公司继续运营"知微宇宙"软件。并且，就本协议项下涉及的某些服务，可能会由公司的关联方、控制公司、继承公司或公司认可的第三方公司向您提供。您知晓并同意接受相关服务内容，即视为接受相关权利义务关系亦受本协议约束。</p>
          <p>如对本协议内容有任何疑问、意见或建议，您可通过登录"知微宇宙"客户端内的"反馈与帮助"页面或发送邮件至3518@sanwuyaoba.com与公司联系。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>2."知微宇宙"软件及相关服务</h2>
          <p>2.1您使用"知微宇宙"软件及相关服务，可以通过预装、公司已授权的第三方下载等方式获取"知微宇宙"客户端应用程序或访问知微宇宙相关网站。若您并非从公司或经公司授权的第三方获取"知微宇宙"软件的，公司无法保证非官方版本的"知微宇宙"软件能够正常使用，您因此遭受的损失与公司无关。</p>
          <p>2.2公司可能为不同的终端设备开发不同的应用程序软件版本，您应当根据实际设备状况获取、下载、安装合适的版本。</p>
          <p>2.3您可根据需要自行使用"知微宇宙"软件及相关服务或更新"知微宇宙"版本，如您不再需要使用"知微宇宙"软件及相关服务，您也可自行卸载相应的应用程序软件。</p>
          <p>2.4为更好的提升用户体验及服务，公司将不定期提供"知微宇宙"软件及相关服务的更新或改变（包括但不限于软件修改、升级、功能强化、开发新服务、软件替换等），您可根据需要自行选择是否更新相应的版本。为保证"知微宇宙"软件及相关服务安全、提升用户服务，"知微宇宙"软件及相关服务部分或全部更新后，公司将在可行情况下以适当方式（包括但不限于系统提示、公告、站内信等）提示您，您有权选择接受更新后版本；如您选择不作更新，则"知微宇宙"软件及相关服务的部分功能将受到限制或不能正常使用。</p>
          <p>2.5除非得到公司明示事先书面授权，您不得以任何形式对"知微宇宙"软件及相关服务进行包括但不限于改编、复制、传播、垂直搜索、镜像或交易等未经授权的访问或使用。</p>
          <p>2.6您理解，您使用"知微宇宙"软件及相关服务需自行准备与软件及相关服务有关的终端设备（如电脑、手机等装置），一旦您在您终端设备中打开"知微宇宙"软件或访问"知微宇宙"相关网站，即视为您使用"知微宇宙"软件及相关服务。为充分实现"知微宇宙"的全部功能，您可能需要将您的终端设备联网，您理解您应自行承担所需要的费用（如流量费、上网费等）。</p>
          <p>2.7公司许可您一项个人的、可撤销的、不可转让的、非独占地和非商业的合法使用"知微宇宙"软件及相关服务的权利。本协议未明示授权的其他一切权利仍由公司保留，您在行使该些权利前须另行获得公司的书面许可，同时公司如未行使前述任何权利，并不构成对该权利的放弃。</p>
          <p>2.8您需要注册后开始使用"知微宇宙"软件及相关服务，但部分功能或服务可能会受到影响。同时，您也理解，为使您更好地使用"知微宇宙"软件及相关服务，保障您的帐号安全，某些功能和/或某些单项服务项目，如评论服务等，要求您按照国家相关法律法规的规定，提供真实的身份信息实名注册并登录后方可使用。</p>
          <p>2.9如您发现"知微宇宙"客户端或官方网站内存在任何侵犯您权利的内容，您可参考知微宇宙侵权投诉指引的内容，按照知微宇宙客户端中提示的投诉途径通知公司，并提供您有相关权利的证据，公司将会依据相关法律规定及时处理您的投诉。如您在"知微宇宙"发布的内容被相关权利人投诉侵权并被处理，且您不认可处理结果，您应根据平台提示的方式（应用内通知或 3518@sanwuyaoba.com）向知微宇宙提交不侵权声明及相关权利证明材料进行申诉，公司同样将会依据相关法律规定及时处理您的申诉。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>3.关于"帐号"</h2>
          <p>3.1用户注册成功后，将拥有知微宇宙的账号及相应密码，该账号密码由用户负责保管，同时，用户对该账号享有使用权，用户应当对以该用户帐号进行的所有活动和事件负法律责任。</p>
          <p>3.2用户登录时，知微宇宙仅核对用户的验证码是否正确，不验证用户的其它信息，不对冒名使用行为或验证行为承担责任。</p>
          <p>3.3您理解并承诺，您所设置的帐号不得违反国家法律法规及"知微宇宙"的相关规则，您的帐号名称、头像和简介等注册信息及其他个人信息中不得出现违法和不良信息，未经他人许可不得用他人名义（包括但不限于冒用他人姓名、名称、字号、头像等或采取其他足以让人引起混淆的方式）开设帐号，不得恶意注册"知微宇宙"帐号（包括但不限于频繁注册、批量注册帐号等行为）。您在帐号注册及使用过程中需遵守相关法律法规，不得实施任何侵害国家利益、损害其他公民合法权益，有害社会道德风尚的行为。公司有权对您提交的注册信息进行审核。</p>
          <p>3.4您在"知微宇宙"中的注册帐号仅限于您本人使用，未经公司书面同意，禁止以任何形式赠与、借用、出租、转让、售卖或以其他方式许可他人使用该帐号。如果公司发现或者有合理理由认为使用者并非帐号初始注册人，为保障帐号安全，公司有权立即暂停或终止向该注册帐号提供服务，并有权永久禁用该帐号。</p>
          <p>3.5您有责任维护个人帐号、密码的安全性与保密性，并对您以注册帐号名义所从事的活动承担全部法律责任，包括但不限于您在"知微宇宙"软件及相关服务上进行的任何数据修改、言论发表、款项支付等操作行为可能引起的一切法律责任。您应高度重视对帐号与密码的保密，在任何情况下不向他人透露帐号及密码。若发现他人未经许可使用您的帐号或发生其他任何安全漏洞问题时，您应当立即通知公司。</p>
          <p>3.6在注册、使用和管理帐号时，您应保证注册帐号时填写的身份信息的真实性，请您在注册、管理帐号时使用真实、准确、合法、有效的相关身份证明材料及必要信息（包括您的姓名及电子邮件地址、联系电话、联系地址等）。依照国家法律法规的规定，为使用"知微宇宙"软件及相关服务的部分功能，您需要填写真实的身份信息，请您按照相关法律规定完成实名认证，并注意及时更新上述相关信息。若您提交的材料或提供的信息不准确、不真实、不规范、不合法或者公司有理由怀疑为错误、不实或不合法的资料，则公司有权拒绝为您提供相关服务，您可能无法使用"知微宇宙"软件及相关服务或在使用过程中部分功能受到限制。</p>
          <p>3.7当您完成"知微宇宙"的帐号注册、登录并进行合理和必要的身份验证后，您可随时浏览APP内相关内容和功能的使用。您理解并同意，出于安全性和身份识别的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。您也可以申请注销帐号，公司会在完成个人身份、安全状态、设备信息、侵权投诉等方面的合理和必要的验证后协助您注销帐号，并依照您的要求删除有关您帐号的一切信息，法律法规另有规定的除外。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>4.用户个人信息保护</h2>
          <p>公司与您一同致力于您个人信息（即能够独立或与其他信息结合后识别您身份的信息）的保护。</p>
          <p>保护用户个人信息是公司的基本原则之一，在使用"知微宇宙"软件及相关服务的过程中，您可能需要提供您的个人信息（包括但不限于您的姓名、电话号码、位置信息、设备信息等），以便公司向您提供更好的服务和相应的技术支持。公司将依法保护您浏览、修改、删除相关个人信息以及撤回授权的权利，并将运用加密技术、匿名化处理等其他与"知微宇宙"软件及相关服务相匹配的技术措施及其他安全措施保护您的个人信息。</p>
          <p>更多关于您个人信息保护的内容，请参看《知微宇宙隐私政策》。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>5.用户行为规范</h2>
          <p>5.1用户行为要求</p>
          <p>您应对您使用"知微宇宙"软件及相关服务的行为负责，除非法律允许或者经公司事先书面许可，您使用"知微宇宙"软件及相关服务不得具有下列行为：</p>
          <p>5.1.1使用未经公司授权或许可的任何插件、外挂、系统或第三方工具对"知微宇宙"软件及相关服务的正常运行进行干扰、破坏、修改或施加其他影响。</p>
          <p>5.1.2利用或针对"知微宇宙"软件及相关服务进行任何危害计算机网络安全的行为，包括但不限于：</p>
          <p>（1）非法侵入网络、干扰网络正常功能、窃取网络数据等危害网络安全的活动；</p>
          <p>（2）提供专门用于从事侵入网络、干扰网络正常功能及防护措施、窃取网络数据等危害网络安全活动的程序、工具；</p>
          <p>（3）明知他人从事危害网络安全的活动的，为其提供技术支持、广告推广、支付结算等帮助；</p>
          <p>（4）使用未经许可的数据或进入未经许可的服务器/帐号；</p>
          <p>（5）未经允许进入公众计算机网络或者他人计算机系统并删除、修改、增加存储信息；</p>
          <p>（6）未经许可，企图探查、扫描、测试"知微宇宙"系统或网络的弱点或其它实施破坏网络安全的行为；</p>
          <p>（7）企图干涉、破坏"知微宇宙"系统或网站的正常运行，故意传播恶意程序或病毒以及其他破坏干扰正常网络信息服务的行为；</p>
          <p>（8）伪造TCP/IP数据包名称或部分名称；</p>
          <p>（9）对"知微宇宙"软件及相关服务进行反向工程、反向汇编、编译或者以其他方式尝试发现"知微宇宙"软件及相关服务的源代码；</p>
          <p>（10）恶意注册"知微宇宙"帐号，包括但不限于频繁、批量注册帐号；</p>
          <p>（11）违反法律法规、本协议、公司的相关规则及侵犯他人合法权益的其他行为。</p>
          <p>5.1.3如果公司有理由认为您的行为违反或可能违反上述约定的，公司可独立进行判断并处理，且在任何时候有权在不事先通知的情况下终止向您提供服务，并依法追究相关责任。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>5.2信息内容展示及规范</h2>
          <p>5.2.1公司致力使发布信息、互动交流、评论成为文明、理性、友善、高质量的意见交流。在推动发布信息、互动交流、评论业务发展的同时，不断加强相应的信息安全管理能力，完善发布信息、互动交流、评论自律，切实履行社会责任，遵守国家法律法规，尊重公民合法权益，尊重社会公序良俗。</p>
          <p>5.2.2您制作、评论、发布、传播的信息应自觉遵守法律法规、社会主义制度、国家利益、公民合法权益、社会公共秩序、道德风尚和信息真实性等"七条底线"要求，否则公司有权立即采取相应处理措施。您同意并承诺不制作、复制、发布、传播下列信息：</p>
          <p>（1）反对宪法确定的基本原则的；</p>
          <p>（2）危害国家安全，泄露国家秘密的；</p>
          <p>（3）颠覆国家政权，推翻社会主义制度，煽动分裂国家，破坏国家统一的；</p>
          <p>（4）损害国家荣誉和利益的；</p>
          <p>（5）宣扬恐怖主义、极端主义的；</p>
          <p>（6）宣扬民族仇恨、民族歧视，破坏民族团结的；</p>
          <p>（7）煽动地域歧视、地域仇恨的；</p>
          <p>（8）破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
          <p>（9）编造、散布谣言、虚假信息，扰乱经济秩序和社会秩序、破坏社会稳定的；</p>
          <p>（10）散布、传播淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
          <p>（11）危害网络安全、利用网络从事危害国家安全、荣誉和利益的；</p>
          <p>（12）侮辱或者诽谤他人，侵害他人合法权益的；</p>
          <p>（13）对他人进行暴力恐吓、威胁，实施人肉搜索的；</p>
          <p>（14）涉及他人隐私、个人信息或资料的；</p>
          <p>（15）散布污言秽语，损害社会公序良俗的；</p>
          <p>（16）侵犯他人隐私权、名誉权、肖像权、知识产权等合法权益内容的；</p>
          <p>（17）散布商业广告，或类似的商业招揽信息、过度营销信息及垃圾信息；</p>
          <p>（18）使用本网站常用语言文字以外的其他语言文字评论的；</p>
          <p>（19）与所评论的信息毫无关系的；</p>
          <p>（20）所发表的信息毫无意义的，或刻意使用字符组合以逃避技术审核的；</p>
          <p>（21）侵害未成年人合法权益或者损害未成年人身心健康的；</p>
          <p>（22）未获他人允许，偷拍、偷录他人，侵害他人合法权利的；</p>
          <p>（23）包含恐怖、暴力血腥、高危险性、危害表演者自身或他人身心健康内容的，包括但不限于以下情形：</p>
          <p>i. 任何暴力和/或自残行为内容；</p>
          <p>ii. 任何威胁生命健康、利用刀具等危险器械表演的危及自身或他人人身及/或财产权利的内容；</p>
          <p>iii.怂恿、诱导他人参与可能会造成人身伤害或导致死亡的危险或违法活动的内容；</p>
          <p>（24）其他含有违反法律法规、政策及公序良俗、干扰"知微宇宙"正常运营或侵犯其他用户或第三方合法权益内容的信息。</p>
          <p>5.3公司设立公众投诉、举报平台，您可按照公司公示的投诉举报制度向公司投诉、举报各类违法违规行为、违法传播活动、违法有害信息等内容，公司将及时受理和处理您的投诉举报，以共同营造风清气正的网络空间。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>6."知微宇宙"信息内容使用规范</h2>
          <p>6.1未经公司书面许可，任何用户、第三方均不得自行或授权、允许、协助他人对"知微宇宙"软件及相关服务中信息内容进行如下行为：</p>
          <p>（1）复制、读取、采用"知微宇宙"软件及相关服务的信息内容，用于包括但不限于宣传、增加阅读量、浏览量等商业用途；</p>
          <p>（2）擅自编辑、整理、编排"知微宇宙"软件及相关服务的信息内容后在"知微宇宙"软件及相关服务的源页面以外的渠道进行展示；</p>
          <p>（3）采用包括但不限于特殊标识、特殊代码等任何形式的识别方法，自行或协助第三人对"知微宇宙"软件及相关服务的信息内容产生流量、阅读量引导、转移、劫持等不利影响；</p>
          <p>（4）其他非法获取或使用"知微宇宙"软件及相关服务的信息内容的行为。</p>
          <p>6.2未经公司书面许可，任何用户、第三方不得以任何方式（包括但不限于盗链、冗余盗取、非法抓取、模拟下载、深度链接、假冒注册等）直接或间接盗取"知微宇宙"软件及相关服务的视频、图文等信息内容，或以任何方式（包括但不限于隐藏或者修改域权利管理电子信息。</p>
          <p>6.3经公司书面许可后，用户、第三方对"知微宇宙"软件及相关服务的信息内容的分享、转发等行为，还应符合以下规范：</p>
          <p>（1）对抓取、统计、获得的相关搜索热词、命中率、分类、搜索量、点击率、阅读量等相关数据，未经公司事先书面同意，不得将上述数据以任何方式公示、提供、泄露给任何第三人；</p>
          <p>（2）不得对"知微宇宙"软件及相关服务的源网页进行任何形式的任何改动，包括但不限于"知微宇宙"软件及相关服务的首页链接、广告系统链接等入口，也不得对"知微宇宙"软件及相关服务的源页面的展示进行任何形式的遮挡、插入、弹窗等妨碍；</p>
          <p>（3）应当采取安全、有效、严密的措施，防止"知微宇宙"软件及相关服务的信息内容被第三方通过包括但不限于"蜘蛛"（spider）程序等任何形式进行非法获取；</p>
          <p>（4）不得把相关数据内容用于公司书面许可范围之外的目的，进行任何形式的销售和商业使用，或向第三方泄露、提供或允许第三方为任何方式的使用。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>7.违约处理</h2>
          <p>7.1针对您违反本协议或其他服务条款的行为，公司有权独立判断并视情况采取预先警示、拒绝发布、立即停止传输信息、删除内容或评论、短期禁止发布内容或评论、限制帐号部分或者全部功能直至终止提供服务、永久关闭帐号等措施，对于因此而造成您无法正常使用帐号及相关服务、无法正常获取您帐号内资产或其他权益等后果，公司不承担任何责任。公司有权公告处理结果，且有权根据实际情况决定是否恢复相关帐号的使用。对涉嫌违反法律法规、涉嫌违法犯罪的行为，公司将保存有关记录，并有权依法向有关主管部门报告、配合有关主管部门调查、向公安机关报案等。对已删除内容公司有权不予恢复。</p>
          <p>7.2因您违反本协议或其他服务条款规定，引起第三方投诉或诉讼索赔的，您应当自行处理并承担可能因此产生的全部法律责任。因您的违法或违约等行为导致公司及其关联方、控制公司、继承公司向任何第三方赔偿或遭受国家机关处罚的，您还应足额赔偿公司及其关联方、控制公司、继承公司因此遭受的全部损失。</p>
          <p>7.3公司尊重并保护用户及他人的知识产权、名誉权、姓名权、隐私权等合法权益。您保证，在使用"知微宇宙"软件及相关服务时上传的文字、图片、视频、音频、链接等不侵犯任何第三方的知识产权、名誉权、姓名权、隐私权等权利及合法权益。否则，公司有权在收到权利方或者相关方通知的情况下移除该涉嫌侵权内容。针对第三方提出的全部权利主张，您应自行处理并承担可能因此产生的全部法律责任；如因您的侵权行为导致公司及其关联方、控制公司、继承公司遭受损失的（包括但不限于经济、商誉等损失），您还应足额赔偿公司及其关联方、控制公司、继承公司遭受的全部损失。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>8.服务的变更、中断和终止</h2>
          <p>8.1您理解并同意，公司提供的"知微宇宙"软件及相关服务是按照现有技术和条件所能达到的现状提供的。公司会尽最大努力向您提供服务，确保服务的连贯性和安全性。您理解，公司不能随时或始终预见和防范法律、技术以及其他风险，包括但不限于不可抗力、网络原因、第三方服务瑕疵、第三方网站等原因可能导致的服务中断、不能正常使用"知微宇宙"软件及相关服务以及其他的损失和风险。</p>
          <p>8.2您理解并同意，公司为了整体服务运营、平台运营安全的需要，有权视具体情况决定服务/功能的设置及其范围修改、中断、中止或终止"知微宇宙"软件及相关服务。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>9.知识产权</h2>
          <p>9.1公司在"知微宇宙"软件及相关服务中提供的内容（包括但不限于软件、技术、程序、网页、文字、图片、图像、音频、视频、图表、版面设计、电子文档等）的知识产权属于公司所有。公司提供"知微宇宙"及相关服务时所依托的软件的著作权、专利权及其他知识产权均归公司所有。未经公司许可，任何人不得擅自使用（包括但不限于通过任何机器人、"蜘蛛"等程序或设备监视、复制、传播、展示、镜像、上载、下载）"知微宇宙"软件及相关服务中的内容。</p>
          <p>9.2公司为"知微宇宙"开发、运营提供技术支持，并对"知微宇宙"软件及相关服务的开发和运营等过程中产生的所有数据和信息等享有法律法规允许范围内的全部权利。</p>
          <p>9.3请您在任何情况下都不要私自使用公司的包括但不限于"知微宇宙"和"http://sanwuyaoba.com/"等在内的任何商标、服务标记、商号、域名、网站名称或其他显著品牌特征等（以下统称为"标识"）。未经公司事先书面同意，您不得将本条款前述标识以单独或结合任何方式展示、使用或申请注册商标、进行域名注册等，也不得实施向他人明示或暗示有权展示、使用、或其他有权处理该些标识的行为。由于您违反本协议使用公司上述商标、标识等给公司或他人造成损失的，由您承担全部法律责任。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>10.免责声明</h2>
          <p>10.1您理解并同意，"知微宇宙"软件及相关服务可能会受多种因素的影响或干扰，公司不保证(包括但不限于)：</p>
          <p>10.1.1"知微宇宙"软件及相关服务完全适合用户的使用要求；</p>
          <p>10.1.2"知微宇宙"软件及相关服务不受干扰，及时、安全、可靠或不出现错误；用户经由公司取得的任何软件、服务或其他材料符合用户的期望；</p>
          <p>10.1.3"知微宇宙"软件及相关服务中任何错误都将能得到更正。</p>
          <p>10.2您理解并同意，在使用"知微宇宙"软件及相关服务过程中，可能遇到不可抗力等因素（不可抗力是指不能预见、不能克服并不能避免的客观事件），包括但不限于政府行为、自然灾害（如洪水、地震、台风等）、网络原因、战争、罢工、骚乱等。出现不可抗力情况时，公司将努力在第一时间及时修复，但因不可抗力造成的暂停、中止、终止服务或造成的任何损失，公司在法律法规允许范围内免于承担责任。</p>
          <p>10.3公司依据本协议约定获得处理违法违规内容的权利，该权利不构成公司的义务或承诺，公司不能保证及时发现违法行为或进行相应处理。</p>
          <p>10.4您理解并同意：关于"知微宇宙"软件及相关服务，公司不提供任何种类的明示或暗示担保或条件，包括但不限于商业适售性、特定用途适用性等。您对"知微宇宙"软件及相关服务的使用行为应自行承担相应风险。</p>
          <p>10.5您理解并同意，本协议旨在保障遵守国家法律法规、维护公序良俗，保护用户和他人合法权益，公司在能力范围内尽最大的努力按照相关法律法规进行判断，但并不保证公司判断完全与司法机关、行政机关的判断一致，如因此产生的后果您已经理解并同意自行承担。</p>
          <p>10.6在任何情况下，公司均不对任何间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害，包括因您使用"知微宇宙"软件及相关服务而遭受的利润损失，承担责任。除法律法规另有明确规定外，公司对您承担的全部责任，无论因何原因或何种行为方式，始终不超过您因使用"知微宇宙"软件及相关服务期间而支付给公司的费用（如有）。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>11.关于单项服务与第三方服务的特殊约定</h2>
          <p>11.1"知微宇宙"软件及相关服务中包含公司以各种合法方式获取的信息或信息内容链接。这些服务在"知微宇宙"可能以单独板块形式存在。公司有权不时地增加、减少或改动这些特别板块的设置及服务。</p>
          <p>11.2您在"知微宇宙"软件中使用第三方提供的软件及相关服务时，除遵守本协议及"知微宇宙"软件中的其他相关规则外，还可能需要同意并遵守第三方的协议、相关规则。如因第三方软件及相关服务产生的争议、损失或损害，由您自行与第三方解决，公司并不就此而对您或任何第三方承担任何责任。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>12.未成年人使用条款</h2>
          <p>12.1若您是未满18周岁的未成年人，您应在您的监护人监护、指导下并获得监护人同意的情况下，认真阅读并同意本协议后，方可使用"知微宇宙"软件及相关服务。</p>
          <p>12.2公司重视对未成年人个人信息的保护，未成年用户在填写个人信息时，请加强个人保护意识并谨慎对待，并应在取得监护人的同意以及在监护人指导下正确使用"知微宇宙"软件及相关服务。</p>
          <p>12.3未成年人用户及其监护人理解并确认，如您违反法律法规、本协议内容，则您及您的监护人应依照法律规定承担因此而可能导致的全部法律责任。</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>13.其他</h2>
          <p>13.1本协议的成立、生效、履行、解释及争议的解决均应适用中华人民共和国法律。倘若本协议之任何规定因与中华人民共和国法律抵触而无效，则这些条款应在不违反法律的前提下按照尽可能接近本协议原条文目的之原则进行重新解释和适用，且本协议其它规定仍应具有完整的效力及效果。</p>
          <p>13.2为给您提供更好的服务或因国家法律法规、政策调整、技术条件、产品功能等变化需要，公司会适时对本协议进行修订，修订内容构成本协议的组成部分。本协议更新后，公司会在"知微宇宙"发出更新版本，并在更新后的条款生效前通过官方网站（http://sanwuyaoba.com/）公告或其他适当的方式提醒您更新的内容，以便您及时了解本协议的最新版本，您也可以在网站首页或软件设置页面查阅最新版本的协议条款。如您继续使用"知微宇宙"软件及相关服务，即表示您已同意接受修订后的本协议内容。</p>
          <p>如您对修订后的协议内容存有异议的，请立即停止登录或使用"知微宇宙"软件及相关服务。若您继续登录或使用"知微宇宙"软件及相关服务，即视为您认可并接受修订后的协议内容。</p>
          <p>13.3您和公司均是独立的主体，在任何情况下本协议不构成公司对您的任何形式的明示或暗示担保或条件，双方之间亦不构成代理、合伙、合营或雇佣关系。</p>
        </section>
      </div>

      <div className="content" style={{ display: language === 'english' ? 'block' : 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Zhiwei Universe User Agreement</h1>
        
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>1. Overview</h2>
          <p>Welcome to the "Zhiwei Universe" software and related services! The "Zhiwei Universe" software and related services refer to the client application program legally owned and operated by Shenzhen Sanwu Yifa Technology Co., Ltd. (hereinafter referred to as "the Company") and the related website (http://sanwuyaoba.com/) that provides you with products and services, including but not limited to personalized audio and video recommendations, information publishing, interactive communication, search queries and other core functions.</p>
          <p>The "Zhiwei Universe User Service Agreement" (hereinafter referred to as "this Agreement") is an agreement between you and the Company regarding your download, installation, registration, login, and use (hereinafter collectively referred to as "use") of the "Zhiwei Universe" software and the related services provided by the "Zhiwei Universe" software.</p>
          <p>In order to better serve you, please carefully read and fully understand this Agreement before starting to use the "Zhiwei Universe" software and related services, especially the terms involving exemption or limitation of liability, license and information use, agreement to open and use special individual services, applicable law and dispute resolution, etc.</p>
          <p>If you are under 18 years old, please read this Agreement carefully and fully understand it with your legal guardian, and use the "Zhiwei Universe" software and related services after obtaining the consent of your legal guardian.</p>
          <p>If you do not agree to this Agreement, this will prevent the Company from providing you with complete products and services, and you can also choose to stop using them. If you independently choose to agree or use the "Zhiwei Universe" software and related services, it will be deemed that you have fully understood this Agreement and agree to be bound by this Agreement and other agreements and rules related to the "Zhiwei Universe" software and related services (including but not limited to the "Zhiwei Universe Privacy Policy") as a party to this Agreement.</p>
          <p>The Company has the right to unilaterally decide, arrange or designate its affiliates, controlling companies, successor companies or third-party companies approved by the Company to continue operating the "Zhiwei Universe" software. Moreover, certain services under this Agreement may be provided to you by the Company's affiliates, controlling companies, successor companies or third-party companies approved by the Company. By knowing and agreeing to accept the relevant service content, you are deemed to accept that the relevant rights and obligations are also bound by this Agreement.</p>
          <p>If you have any questions, comments or suggestions about the content of this Agreement, you can contact the Company through the "Feedback and Help" page in the "Zhiwei Universe" client or by sending an email to 3518@sanwuyaoba.com.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>2. "Zhiwei Universe" Software and Related Services</h2>
          <p>2.1 You can obtain the "Zhiwei Universe" client application program or access the Zhiwei Universe related website through pre-installation, third-party downloads authorized by the Company, and other methods. If you obtain the "Zhiwei Universe" software from sources other than the Company or its authorized third parties, the Company cannot guarantee that the unofficial version of the "Zhiwei Universe" software will function normally, and the Company is not responsible for any losses you may suffer as a result.</p>
          <p>2.2 The Company may develop different application software versions for different terminal devices. You should obtain, download, and install the appropriate version based on your actual device conditions.</p>
          <p>2.3 You can use the "Zhiwei Universe" software and related services or update the "Zhiwei Universe" version as needed. If you no longer need to use the "Zhiwei Universe" software and related services, you can also uninstall the corresponding application software.</p>
          <p>2.4 To better enhance user experience and service, the Company will periodically provide updates or changes to the "Zhiwei Universe" software and related services (including but not limited to software modifications, upgrades, feature enhancements, new service development, software replacement, etc.). You can choose whether to update to the corresponding version as needed. To ensure the security of the "Zhiwei Universe" software and related services and improve user service, after the "Zhiwei Universe" software and related services are partially or fully updated, the Company will notify you in an appropriate manner (including but not limited to system prompts, announcements, and in-app messages) when feasible. You have the right to choose to accept the updated version; if you choose not to update, some functions of the "Zhiwei Universe" software and related services will be restricted or cannot be used normally.</p>
          <p>2.5 Unless you have obtained the Company's prior written authorization, you may not access or use the "Zhiwei Universe" software and related services in any form, including but not limited to adaptation, copying, dissemination, vertical search, mirroring, or trading.</p>
          <p>2.6 You understand that you need to prepare the terminal equipment related to the software and related services (such as computers, mobile phones, and other devices) by yourself. Once you open the "Zhiwei Universe" software on your terminal device or access the "Zhiwei Universe" related website, it is deemed that you are using the "Zhiwei Universe" software and related services. To fully realize all the functions of "Zhiwei Universe," you may need to connect your terminal device to the internet. You understand that you should bear the necessary costs (such as data fees, internet fees, etc.) by yourself.</p>
          <p>2.7 The Company grants you a personal, revocable, non-transferable, non-exclusive, and non-commercial license to legally use the "Zhiwei Universe" software and related services. All other rights not expressly authorized in this Agreement are still reserved by the Company. You must obtain the Company's written permission before exercising these rights. At the same time, if the Company does not exercise any of the foregoing rights, it does not constitute a waiver of that right.</p>
          <p>2.8 You need to register to start using the "Zhiwei Universe" software and related services, but some functions or services may be affected. At the same time, you also understand that to better use the "Zhiwei Universe" software and related services and protect your account security, certain functions and/or certain individual service items, such as comment services, require you to provide real identity information for real-name registration and login in accordance with relevant national laws and regulations before you can use them.</p>
          <p>2.9 If you find any content in the "Zhiwei Universe" client or official website that infringes your rights, you can refer to the Zhiwei Universe infringement complaint guidelines and notify the Company through the complaint channels prompted in the Zhiwei Universe client, providing evidence of your relevant rights. The Company will handle your complaint in a timely manner in accordance with relevant legal regulations. If the content you publish on "Zhiwei Universe" is complained of infringement by relevant rights holders and processed, and you do not agree with the processing results, you should submit a non-infringement statement and relevant rights proof materials to Zhiwei Universe for appeal through the method prompted by the platform (in-app notification or 3518@sanwuyaoba.com). The Company will also handle your appeal in a timely manner in accordance with relevant legal regulations.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>3. About "Account"</h2>
          <p>3.1 After successful registration, users will have a Zhiwei Universe account and corresponding password. The account password is the responsibility of the user to keep safe. At the same time, users have the right to use the account and shall bear legal responsibility for all activities and events conducted under the user account.</p>
          <p>3.2 When users log in, Zhiwei Universe only verifies whether the user's verification code is correct and does not verify other user information. It does not bear responsibility for impersonation or verification behavior.</p>
          <p>3.3 You understand and promise that the account you set up must not violate national laws and regulations and relevant rules of "Zhiwei Universe." Your account name, avatar, profile, and other registration information and personal information must not contain illegal or harmful information. You may not use others' names (including but not limited to impersonating others' names, titles, aliases, avatars, etc., or using other methods that may cause confusion) to create accounts without permission. You may not maliciously register "Zhiwei Universe" accounts (including but not limited to frequent registration, batch registration of accounts, etc.). You must comply with relevant laws and regulations during account registration and use, and must not implement any acts that infringe on national interests, harm the legitimate rights and interests of other citizens, or harm social morality. The Company has the right to review the registration information you submit.</p>
          <p>3.4 Your registered account in "Zhiwei Universe" is limited to your personal use. Without the Company's written consent, it is prohibited to gift, lend, rent, transfer, sell, or otherwise permit others to use the account in any form. If the Company discovers or has reasonable grounds to believe that the user is not the initial registrant of the account, to protect account security, the Company has the right to immediately suspend or terminate services to the registered account and may permanently disable the account.</p>
          <p>3.5 You are responsible for maintaining the security and confidentiality of your personal account and password, and shall bear all legal responsibilities for all activities conducted in the name of your registered account, including but not limited to any data modifications, comments, payments, and other operational behaviors you perform on the "Zhiwei Universe" software and related services. You should attach great importance to the confidentiality of your account and password and not disclose your account and password to others under any circumstances. If you discover that others are using your account without permission or there are any other security vulnerabilities, you should immediately notify the Company.</p>
          <p>3.6 When registering, using, and managing your account, you should ensure the authenticity of the identity information filled in during account registration. Please use real, accurate, legal, and effective relevant identity certification materials and necessary information (including your name, email address, contact phone number, contact address, etc.) when registering and managing your account. In accordance with national laws and regulations, to use certain functions of the "Zhiwei Universe" software and related services, you need to fill in real identity information. Please complete real-name authentication in accordance with relevant legal regulations and pay attention to updating the above relevant information in a timely manner. If the materials you submit or the information you provide is inaccurate, untrue, non-standard, illegal, or the Company has reason to suspect it is erroneous, untrue, or illegal, the Company has the right to refuse to provide you with relevant services, and you may not be able to use the "Zhiwei Universe" software and related services or some functions may be restricted during use.</p>
          <p>3.7 After you complete the account registration, login, and reasonable and necessary identity verification for "Zhiwei Universe," you can browse and use the relevant content and functions in the APP at any time. You understand and agree that for security and identity recognition considerations, you may not be able to modify the initial registration information and other verification information provided during registration. You can also apply to cancel your account. The Company will assist you in canceling your account after completing reasonable and necessary verification of personal identity, security status, device information, infringement complaints, etc., and will delete all information about your account in accordance with your requirements, except as otherwise provided by laws and regulations.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>4. User Personal Information Protection</h2>
          <p>The Company works with you to protect your personal information (i.e., information that can identify you independently or in combination with other information).</p>
          <p>Protecting user personal information is one of the Company's basic principles. In the process of using the "Zhiwei Universe" software and related services, you may need to provide your personal information (including but not limited to your name, phone number, location information, device information, etc.) so that the Company can provide you with better services and corresponding technical support. The Company will legally protect your rights to browse, modify, delete relevant personal information, and withdraw authorization, and will use encryption technology, anonymization processing, and other technical measures and security measures that match the "Zhiwei Universe" software and related services to protect your personal information.</p>
          <p>For more information about your personal information protection, please refer to the "Zhiwei Universe Privacy Policy."</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>5. User Behavior Standards</h2>
          <p>5.1 User Behavior Requirements</p>
          <p>You are responsible for your behavior in using the "Zhiwei Universe" software and related services. Unless permitted by law or with the Company's prior written permission, you may not engage in the following behaviors when using the "Zhiwei Universe" software and related services:</p>
          <p>5.1.1 Using any plugins, external programs, systems, or third-party tools that are not authorized or permitted by the Company to interfere with, damage, modify, or otherwise affect the normal operation of the "Zhiwei Universe" software and related services.</p>
          <p>5.1.2 Using or targeting the "Zhiwei Universe" software and related services to conduct any activities that endanger computer network security, including but not limited to:</p>
          <p>(1) Illegal intrusion into networks, interference with normal network functions, theft of network data, and other activities that endanger network security;</p>
          <p>(2) Providing programs and tools specifically used for activities that endanger network security, such as network intrusion, interference with normal network functions and protective measures, and theft of network data;</p>
          <p>(3) Providing technical support, advertising promotion, payment settlement, and other assistance to others who are engaged in activities that endanger network security, knowing that they are engaged in such activities;</p>
          <p>(4) Using unauthorized data or accessing unauthorized servers/accounts;</p>
          <p>(5) Unauthorized entry into public computer networks or others' computer systems and deletion, modification, or addition of stored information;</p>
          <p>(6) Unauthorized attempts to probe, scan, or test the weaknesses of the "Zhiwei Universe" system or network or other activities that damage network security;</p>
          <p>(7) Attempts to interfere with or damage the normal operation of the "Zhiwei Universe" system or website, intentional dissemination of malicious programs or viruses, and other behaviors that destroy or interfere with normal network information services;</p>
          <p>(8) Forgery of TCP/IP data packet names or partial names;</p>
          <p>(9) Reverse engineering, reverse assembly, compilation, or other attempts to discover the source code of the "Zhiwei Universe" software and related services;</p>
          <p>(10) Malicious registration of "Zhiwei Universe" accounts, including but not limited to frequent and batch registration of accounts;</p>
          <p>(11) Other behaviors that violate laws and regulations, this Agreement, the Company's relevant rules, and infringe on the legitimate rights and interests of others.</p>
          <p>5.1.3 If the Company has reason to believe that your behavior violates or may violate the above agreements, the Company may independently judge and handle the situation, and has the right to terminate services to you at any time without prior notice and pursue relevant legal responsibilities.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>5.2 Information Content Display and Standards</h2>
          <p>5.2.1 The Company is committed to making information publishing, interactive communication, and comments become civilized, rational, friendly, and high-quality opinion exchanges. While promoting the development of information publishing, interactive communication, and comment services, the Company continuously strengthens corresponding information security management capabilities, improves information publishing, interactive communication, and comment self-discipline, effectively fulfills social responsibilities, complies with national laws and regulations, respects citizens' legitimate rights and interests, and respects social public order and good customs.</p>
          <p>5.2.2 The information you create, comment on, publish, and disseminate should consciously comply with the "seven bottom lines" requirements of laws and regulations, the socialist system, national interests, citizens' legitimate rights and interests, social public order, moral standards, and information authenticity. Otherwise, the Company has the right to immediately take corresponding processing measures. You agree and promise not to create, copy, publish, or disseminate the following information:</p>
          <p>(1) Information that opposes the basic principles determined by the Constitution;</p>
          <p>(2) Information that endangers national security or leaks state secrets;</p>
          <p>(3) Information that subverts state power, overthrows the socialist system, incites national division, or undermines national unity;</p>
          <p>(4) Information that damages national honor and interests;</p>
          <p>(5) Information that promotes terrorism or extremism;</p>
          <p>(6) Information that promotes ethnic hatred, ethnic discrimination, or undermines ethnic unity;</p>
          <p>(7) Information that incites regional discrimination or regional hatred;</p>
          <p>(8) Information that undermines national religious policies or promotes cults and feudal superstition;</p>
          <p>(9) Information that fabricates or spreads rumors, false information, disrupts economic and social order, or undermines social stability;</p>
          <p>(10) Information that disseminates or spreads obscenity, pornography, gambling, violence, murder, terror, or incites crime;</p>
          <p>(11) Information that endangers network security or uses the network to engage in activities that endanger national security, honor, and interests;</p>
          <p>(12) Information that insults or defames others or infringes on others' legitimate rights and interests;</p>
          <p>(13) Information that threatens others with violence or implements doxxing;</p>
          <p>(14) Information that involves others' privacy, personal information, or materials;</p>
          <p>(15) Information that spreads vulgar language or damages social public order and good customs;</p>
          <p>(16) Information that infringes on others' privacy rights, reputation rights, portrait rights, intellectual property rights, and other legitimate rights and interests;</p>
          <p>(17) Information that spreads commercial advertisements or similar commercial solicitation information, excessive marketing information, and spam;</p>
          <p>(18) Comments using languages other than the common languages used on this website;</p>
          <p>(19) Comments that are completely unrelated to the commented information;</p>
          <p>(20) Comments that are meaningless or deliberately use character combinations to evade technical review;</p>
          <p>(21) Information that infringes on the legitimate rights and interests of minors or damages their physical and mental health;</p>
          <p>(22) Information that secretly photographs or records others without permission, infringing on their legitimate rights;</p>
          <p>(23) Content containing terror, violent bloodshed, high risk, or endangering the physical and mental health of performers or others, including but not limited to the following situations:</p>
          <p>i. Any violent and/or self-harm behavior content;</p>
          <p>ii. Any content that threatens life and health, uses dangerous instruments such as knives for performances that endanger the personal and/or property rights of oneself or others;</p>
          <p>iii. Content that encourages or induces others to participate in dangerous or illegal activities that may cause personal injury or death;</p>
          <p>(24) Other information containing content that violates laws and regulations, policies, and public order and good customs, interferes with the normal operation of "Zhiwei Universe," or infringes on the legitimate rights and interests of other users or third parties.</p>
          <p>5.3 The Company has established a public complaint and reporting platform. You can report various illegal and non-compliant behaviors, illegal dissemination activities, illegal harmful information, and other content to the Company in accordance with the Company's published complaint and reporting system. The Company will promptly accept and handle your complaints and reports to jointly create a clean and positive cyberspace.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>6. "Zhiwei Universe" Information Content Usage Standards</h2>
          <p>6.1 Without the Company's written permission, no user or third party may independently or authorize, allow, or assist others to perform the following acts on the information content in the "Zhiwei Universe" software and related services:</p>
          <p>(1) Copying, reading, or using the information content of the "Zhiwei Universe" software and related services for commercial purposes, including but not limited to promotion, increasing readership, page views, etc.;</p>
          <p>(2) Unauthorized editing, organizing, or arranging the information content of the "Zhiwei Universe" software and related services and displaying it on channels other than the source page of the "Zhiwei Universe" software and related services;</p>
          <p>(3) Using any form of identification method, including but not limited to special identifiers, special codes, etc., to independently or assist third parties in generating traffic, readership guidance, transfer, hijacking, and other adverse effects on the information content of the "Zhiwei Universe" software and related services;</p>
          <p>(4) Other acts of illegally obtaining or using the information content of the "Zhiwei Universe" software and related services.</p>
          <p>6.2 Without the Company's written permission, no user or third party may directly or indirectly steal the video, graphic, and other information content of the "Zhiwei Universe" software and related services in any way (including but not limited to hotlinking, redundant theft, illegal crawling, simulated downloading, deep linking, fake registration, etc.), or hide or modify domain rights management electronic information in any way.</p>
          <p>6.3 After obtaining the Company's written permission, users and third parties' sharing, forwarding, and other behaviors of the information content of the "Zhiwei Universe" software and related services should also comply with the following standards:</p>
          <p>(1) For the relevant search hot words, hit rates, classifications, search volumes, click rates, readership, and other related data obtained through crawling, statistics, or acquisition, without the Company's prior written consent, the above data may not be publicly displayed, provided, or leaked to any third party in any way;</p>
          <p>(2) No changes of any form may be made to the source webpage of the "Zhiwei Universe" software and related services, including but not limited to the homepage links, advertising system links, and other entrances of the "Zhiwei Universe" software and related services, nor may any form of obstruction, insertion, pop-up, or other interference be made to the display of the source page of the "Zhiwei Universe" software and related services;</p>
          <p>(3) Safe, effective, and strict measures should be taken to prevent the information content of the "Zhiwei Universe" software and related services from being illegally obtained by third parties through any form, including but not limited to "spider" programs;</p>
          <p>(4) The relevant data content may not be used for purposes beyond the scope of the Company's written permission, for any form of sales and commercial use, or for disclosure, provision, or permission to third parties for any form of use.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>7. Breach Handling</h2>
          <p>7.1 For your behavior that violates this Agreement or other service terms, the Company has the right to independently judge and take measures such as prior warning, refusal to publish, immediate stop of information transmission, deletion of content or comments, short-term prohibition of content or comment publishing, restriction of account functions in part or in whole until termination of services, permanent account closure, etc., as the case may be. For the consequences of your inability to normally use your account and related services, or to normally obtain your account assets or other rights and interests, the Company does not bear any responsibility. The Company has the right to announce the processing results and has the right to decide whether to restore the use of related accounts based on the actual situation. For behaviors suspected of violating laws and regulations or suspected of illegal crimes, the Company will preserve relevant records and has the right to report to relevant competent departments, cooperate with relevant competent departments in investigation, report to public security organs, etc. The Company has the right not to restore deleted content.</p>
          <p>7.2 If your violation of this Agreement or other service terms causes third-party complaints or litigation claims, you shall handle them yourself and bear all possible legal responsibilities. If your illegal or breach of contract behavior causes the Company and its affiliates, controlling companies, or successor companies to compensate any third party or suffer penalties from state organs, you shall also fully compensate the Company and its affiliates, controlling companies, or successor companies for all losses suffered.</p>
          <p>7.3 The Company respects and protects the intellectual property rights, reputation rights, name rights, privacy rights, and other legitimate rights and interests of users and others. You guarantee that the text, pictures, videos, audio, links, etc. uploaded when using the "Zhiwei Universe" software and related services do not infringe on any third party's intellectual property rights, reputation rights, name rights, privacy rights, and other rights and legitimate interests. Otherwise, the Company has the right to remove the suspected infringing content upon receiving notice from the rights holder or relevant party. For all rights claims raised by third parties, you shall handle them yourself and bear all possible legal responsibilities; if your infringing behavior causes losses to the Company and its affiliates, controlling companies, or successor companies (including but not limited to economic and reputational losses), you shall also fully compensate the Company and its affiliates, controlling companies, or successor companies for all losses suffered.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>8. Service Changes, Interruption, and Termination</h2>
          <p>8.1 You understand and agree that the "Zhiwei Universe" software and related services provided by the Company are provided in their current state based on existing technology and conditions. The Company will make every effort to provide you with services and ensure the continuity and security of the services. You understand that the Company cannot always foresee and prevent legal, technical, and other risks, including but not limited to force majeure, network reasons, third-party service defects, third-party website reasons, etc., which may cause service interruption, inability to normally use the "Zhiwei Universe" software and related services, and other losses and risks.</p>
          <p>8.2 You understand and agree that for the overall service operation and platform operation security needs, the Company has the right to decide on the settings of services/functions and their scope modification, interruption, suspension, or termination of the "Zhiwei Universe" software and related services based on specific circumstances.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>9. Intellectual Property</h2>
          <p>9.1 The intellectual property rights of the content provided by the Company in the "Zhiwei Universe" software and related services (including but not limited to software, technology, programs, web pages, text, pictures, images, audio, video, charts, layout design, electronic documents, etc.) belong to the Company. The copyright, patent rights, and other intellectual property rights of the software on which the Company provides "Zhiwei Universe" and related services are all owned by the Company. Without the Company's permission, no one may use (including but not limited to monitoring, copying, disseminating, displaying, mirroring, uploading, downloading through any robots, "spiders," and other programs or devices) the content in the "Zhiwei Universe" software and related services.</p>
          <p>9.2 The Company provides technical support for the development and operation of "Zhiwei Universe" and enjoys all rights to all data and information generated during the development and operation of the "Zhiwei Universe" software and related services within the scope permitted by laws and regulations.</p>
          <p>9.3 Please do not use the Company's trademarks, service marks, trade names, domain names, website names, or other distinctive brand features (hereinafter collectively referred to as "marks"), including but not limited to "Zhiwei Universe" and "http://sanwuyaoba.com/," under any circumstances. Without the Company's prior written consent, you may not display, use, or apply for trademark registration, domain name registration, etc. of the aforementioned marks, either alone or in combination, nor may you implement behaviors that explicitly or implicitly indicate to others that you have the right to display, use, or otherwise handle these marks. If your use of the Company's above trademarks, marks, etc. in violation of this Agreement causes losses to the Company or others, you shall bear all legal responsibilities.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>10. Disclaimer</h2>
          <p>10.1 You understand and agree that the "Zhiwei Universe" software and related services may be affected or interfered with by various factors. The Company does not guarantee (including but not limited to):</p>
          <p>10.1.1 The "Zhiwei Universe" software and related services are completely suitable for your use requirements;</p>
          <p>10.1.2 The "Zhiwei Universe" software and related services will not be interfered with, will be timely, secure, reliable, or error-free; any software, services, or other materials obtained by users from the Company meet users' expectations;</p>
          <p>10.1.3 Any errors in the "Zhiwei Universe" software and related services will be corrected.</p>
          <p>10.2 You understand and agree that in the process of using the "Zhiwei Universe" software and related services, you may encounter force majeure and other factors (force majeure refers to objective events that cannot be foreseen, overcome, and avoided), including but not limited to government actions, natural disasters (such as floods, earthquakes, typhoons, etc.), network reasons, wars, strikes, riots, etc. In the event of force majeure, the Company will strive to repair in a timely manner, but the Company is exempt from responsibility for any suspension, interruption, termination of services, or any losses caused by force majeure within the scope permitted by laws and regulations.</p>
          <p>10.3 The Company's right to handle illegal and non-compliant content in accordance with this Agreement does not constitute the Company's obligation or commitment, and the Company cannot guarantee timely discovery of illegal behaviors or corresponding handling.</p>
          <p>10.4 You understand and agree: Regarding the "Zhiwei Universe" software and related services, the Company does not provide any kind of express or implied guarantee or condition, including but not limited to merchantability, fitness for a particular purpose, etc. You should bear the corresponding risks for your use of the "Zhiwei Universe" software and related services.</p>
          <p>10.5 You understand and agree that this Agreement aims to ensure compliance with national laws and regulations, maintain public order and good customs, and protect the legitimate rights and interests of users and others. The Company will make every effort to make judgments in accordance with relevant laws and regulations within its capabilities, but does not guarantee that the Company's judgments will be completely consistent with those of judicial and administrative organs. You have understood and agreed to bear the consequences that may arise therefrom.</p>
          <p>10.6 In any case, the Company shall not be liable for any indirect, consequential, punitive, incidental, special, or penal damages, including profit losses suffered by you due to your use of the "Zhiwei Universe" software and related services. Unless otherwise expressly provided by laws and regulations, the Company's total liability to you, regardless of the cause or manner of behavior, shall not exceed the fees you paid to the Company during your use of the "Zhiwei Universe" software and related services (if any).</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>11. Special Agreements on Individual Services and Third-Party Services</h2>
          <p>11.1 The "Zhiwei Universe" software and related services include information or information content links obtained by the Company through various legal means. These services may exist in "Zhiwei Universe" in the form of separate sections. The Company has the right to add, reduce, or change the settings and services of these special sections from time to time.</p>
          <p>11.2 When you use software and related services provided by third parties in the "Zhiwei Universe" software, in addition to complying with this Agreement and other relevant rules in the "Zhiwei Universe" software, you may also need to agree to and comply with the third party's agreement and relevant rules. For disputes, losses, or damages arising from third-party software and related services, you shall resolve them with the third party yourself, and the Company does not bear any responsibility to you or any third party for this.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>12. Minor Usage Terms</h2>
          <p>12.1 If you are a minor under 18 years old, you should carefully read and agree to this Agreement under the supervision and guidance of your guardian and with their consent before using the "Zhiwei Universe" software and related services.</p>
          <p>12.2 The Company attaches great importance to the protection of minors' personal information. When filling in personal information, minor users should strengthen personal protection awareness and be cautious, and should correctly use the "Zhiwei Universe" software and related services with the consent and under the guidance of their guardians.</p>
          <p>12.3 Minor users and their guardians understand and confirm that if you violate laws and regulations or the content of this Agreement, you and your guardian shall bear all possible legal responsibilities in accordance with the law.</p>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>13. Others</h2>
          <p>13.1 The establishment, effectiveness, performance, interpretation, and dispute resolution of this Agreement shall be governed by the laws of the People's Republic of China. If any provision of this Agreement is invalid due to conflict with the laws of the People's Republic of China, these terms shall be reinterpreted and applied in accordance with the principle of being as close as possible to the original purpose of this Agreement without violating the law, and other provisions of this Agreement shall still have full effect.</p>
          <p>13.2 To provide you with better services or due to changes in national laws and regulations, policies, technical conditions, product functions, etc., the Company will revise this Agreement from time to time, and the revised content constitutes part of this Agreement. After this Agreement is updated, the Company will issue an updated version in "Zhiwei Universe" and notify you of the updated content through the official website (http://sanwuyaoba.com/) or other appropriate means before the updated terms take effect, so that you can timely understand the latest version of this Agreement. You can also check the latest version of the agreement terms on the website homepage or software settings page. If you continue to use the "Zhiwei Universe" software and related services, it means that you have agreed to accept the revised content of this Agreement.</p>
          <p>If you have objections to the revised agreement content, please stop logging in or using the "Zhiwei Universe" software and related services immediately. If you continue to log in or use the "Zhiwei Universe" software and related services, it will be deemed that you recognize and accept the revised agreement content.</p>
          <p>13.3 You and the Company are independent entities. In any case, this Agreement does not constitute any form of express or implied guarantee or condition by the Company to you, and the two parties do not constitute an agency, partnership, joint venture, or employment relationship.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;