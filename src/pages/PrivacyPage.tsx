import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Shield, Lock, FileText } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Política de Privacidade | Poço Artesiano RJ</title>
                <meta name="description" content="Política de Privacidade da Poço_Artesiano_RJ. Entenda como coletamos, usamos e protegemos seus dados pessoais." />
            </Helmet>

            <Breadcrumbs />

            <section className="py-24 bg-slate-950 min-h-screen">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    {/* Header */}
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/20 text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-6">
                            <Shield className="w-3 h-3" /> Documento_Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            POLÍTICA DE PRIVACIDADE
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Esta política de privacidade é válida a partir de janeiro 2026.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
                        <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
                            <p className="mb-6 font-bold text-white uppercase tracking-wider">
                                POLÍTICA DE PRIVACIDADE — p
                            </p>

                            <p className="mb-4">
                                A p, pessoa jurídica de direito privado, com sede na Avenida Presidente Vargas, 7325 - Centro/RJ (“Lojista” ou “nós”) leva a sua privacidade a sério e zela pela segurança e proteção de dados de todos os seus clientes, parceiros, fornecedores e usuários (“Usuários” ou “você”) do site <Link to="/" className="text-cyan-400 hover:underline">https://pocoartesianorj.com.br</Link> e qualquer outro site, Loja, aplicativo operado pelo Lojista (aqui designados, simplesmente, “Loja”).
                            </p>

                            <p className="mb-4">
                                Esta Política de Privacidade (“Política de Privacidade”) destina-se a informá-lo sobre o modo como nós utilizamos e divulgamos informações coletadas em suas visitas à nossa Loja e em mensagens que trocamos com você (“Comunicações”).
                            </p>

                            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-6 italic text-gray-200">
                                AO ACESSAR A LOJA, ENVIAR COMUNICAÇÕES OU FORNECER QUALQUER TIPO DE DADO PESSOAL, VOCÊ DECLARA ESTAR CIENTE E DE ACORDO COM ESTA POLÍTICA DE PRIVACIDADE, A QUAL DESCREVE AS FINALIDADES E FORMAS DE TRATAMENTO DE SEUS DADOS PESSOAIS QUE VOCÊ DISPONIBILIZAR NA LOJA.
                            </div>

                            <p className="mb-4">
                                Esta Política de Privacidade fornece uma visão geral de nossas práticas de privacidade e das escolhas que você pode fazer, bem como direitos que você pode exercer em relação aos Dados Pessoais tratados por nós. Se você tiver alguma dúvida sobre o uso de Dados Pessoais, entre em contato com <span className="text-cyan-400">contato.grupowebcluster@gmail.com</span>.
                            </p>

                            <p className="mb-4">
                                Além disso, a Política de Privacidade não se aplica a quaisquer aplicativos, produtos, serviços, site ou recursos de mídia social de terceiros que possam ser oferecidos ou acessados por meio da Loja. O acesso a esses links fará com que você deixe a Loja e possa resultar na coleta ou compartilhamento de informações sobre você por terceiros. Nós não controlamos, endossamos ou fazemos quaisquer representações sobre esses sites de terceiros ou suas práticas de privacidade, que podem ser diferentes das nossas. Recomendamos que você revise a política de privacidade de qualquer site com o qual você interaja antes de permitir a coleta e o uso de seus Dados Pessoais.
                            </p>

                            <p className="mb-4">
                                Caso você nos envie Dados Pessoais referentes a outras pessoas físicas, você declara ter a competência para fazê-lo e declara ter obtido o consentimento necessário para autorizar o uso de tais informações nos termos desta Política de Privacidade.
                            </p>
                        </div>

                        {/* Definitions */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Definições</h2>
                            <p className="mb-4 text-gray-400 italic">Para os fins desta Política de Privacidade:</p>
                            <ul className="space-y-4">
                                <li className="pl-6 border-l border-cyan-500/30">
                                    <strong className="text-white block mb-1">“Dados Pessoais”</strong>
                                    Significa qualquer informação que, direta ou indiretamente, identifique ou possa identificar uma pessoa natural, como por exemplo, nome, CPF, data de nascimento, endereço IP, dentre outros;
                                </li>
                                <li className="pl-6 border-l border-cyan-500/30">
                                    <strong className="text-white block mb-1">“Dados Pessoais Sensíveis”</strong>
                                    Significa qualquer informação que revele, em relação a uma pessoa natural, origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico;
                                </li>
                                <li className="pl-6 border-l border-cyan-500/30">
                                    <strong className="text-white block mb-1">“Tratamento de Dados Pessoais”</strong>
                                    Significa qualquer operation efetuada no âmbito dos Dados Pessoais, por meio de meios automáticos ou não, tal como a recolha, gravação, organização, estruturação, armazenamento, adaptação ou alteração, recuperação, consulta, utilização, divulgação por transmissão, disseminação ou, alternativamente, disponibilização, harmonização ou associação, restrição, eliminação ou destruição. Também é considerado Tratamento de Dados Pessoais qualquer outra operação prevista nos termos da legislação aplicável;
                                </li>
                                <li className="pl-6 border-l border-cyan-500/30">
                                    <strong className="text-white block mb-1">“Leis de Proteção de Dados”</strong>
                                    Significa todas as disposições legais que regulem o Tratamento de Dados Pessoais, incluindo, porém sem se limitar, a Lei nº 13.709/18, Lei Geral de Proteção de Dados Pessoais (“LGPD”).
                                </li>
                            </ul>
                        </div>

                        {/* Usage */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Uso de Dados Pessoais</h2>
                            <p className="mb-4">
                                Coletamos e usamos Dados Pessoais para gerenciar seu relacionamento conosco e melhor atendê-lo quando você estiver adquirindo produtos e/ou serviços na Loja, personalizando e melhorando sua experiência. Exemplos de como usamos os dados incluem:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-gray-400">
                                <li>Viabilizar que você adquira produtos e/ou serviços na Loja;</li>
                                <li>Para confirmar ou corrigir as informações que temos sobre você;</li>
                                <li>Para enviar informações que acreditamos ser do seu interesse;</li>
                                <li>Para personalizar sua experiência de uso da Loja;</li>
                                <li>Para personalizar o envio de publicidades para você, baseada em seu interesse em nossa Loja; e</li>
                                <li>Para entrarmos em contato por um número de telefone e/ou endereço de e-mail fornecido. Podemos entrar em contato com você pessoalmente, por mensagem de voz, através de equipamentos de discagem automática, por mensagens de texto (SMS), por e-mail, ou por qualquer outro meio de comunicação que seu dispositivo seja capaz de receber, nos termos da lei e para fins comerciais razoáveis.</li>
                            </ul>
                            <p className="mb-4">
                                Além disso, os Dados Pessoais fornecidos também podem ser utilizados na forma que julgarmos necessária ou adequada: (a) nos termos das Leis de Proteção de Dados; (b) para atender exigências de processo judicial; (c) para cumprir decisão judicial, decisão regulatória ou decisão de autoridades competentes, incluindo autoridades fora do país de residência; (d) para proteger nossas operações; (e) para proteger direitos, privacidade, segurança nossos, seus ou de terceiros; (f) para detectar e prevenir fraude; (g) permitir-nos usar as ações disponíveis ou limitar danos que venhamos a sofrer; (h) de outros modos permitidos por lei.
                            </p>
                            <div className="bg-cyan-500/10 border py-3 px-4 text-center border-cyan-500/30 uppercase font-black tracking-widest text-white">
                                A NOSSA LOJA NÃO SE DESTINA A PESSOAS COM MENOS DE 18 (DEZOITO) ANOS E PEDIMOS QUE TAIS PESSOAS NÃO NOS FORNEÇAM QUALQUER DADO PESSOAL
                            </div>
                        </div>

                        {/* Non-provision */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Não fornecimento de Dados Pessoais</h2>
                            <p>
                                Você não é obrigado a compartilhar os Dados Pessoais que solicitamos, no entanto, se você optar por não os compartilhar, em alguns casos, não poderemos fornecer a você acesso completo à Loja, alguns recursos especializados ou ser capaz de prestar a assistência necessária ou, ainda, viabilizar a entrega do produto ou prestar o serviço contratado por você.
                            </p>
                        </div>

                        {/* Data Collected */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Dados coletados</h2>
                            <p className="mb-4">
                                O público em geral poderá navegar na Loja sem necessidade de qualquer cadastro e envio de Dados Pessoais. No entanto, algumas das funcionalidades da Loja poderão depender de cadastro e envio de Dados Pessoais como concluir a compra/contratação do serviço e/ou a viabilizar a entrega do produto/prestação do serviço por nós.
                            </p>
                            <p className="mb-2 font-bold text-white">No contato a Loja, nós podemos coletar:</p>
                            <ul className="list-disc list-inside space-y-1 mb-6 ml-4 text-gray-400">
                                <li><strong className="text-gray-300">Dados de contato:</strong> Nome, sobrenome, número de telefone, cidade, Estado e endereço de e-mail;</li>
                                <li><strong className="text-gray-300">Informações que você envia:</strong> Informações que você envia via formulário (dúvidas, reclamações, sugestões, críticas, elogios etc.).</li>
                            </ul>

                            <p className="mb-2 font-bold text-white">Na navegação geral na Loja, nós poderemos coletar:</p>
                            <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-400">
                                <li><strong className="text-gray-300">Dados de localização:</strong> Dados de geolocalização quando você acessa a Loja;</li>
                                <li><strong className="text-gray-300">Preferências:</strong> Informações sobre suas preferências e interesses em relação aos produtos/serviços;</li>
                                <li><strong className="text-gray-300">Dados de navegação na Loja:</strong> Informações sobre suas visitas e atividades na Loja, incluindo o conteúdo com os quais você visualiza e interage, informações sobre o navegador e o dispositivo que você está usando, seu endereço IP, sua localização, o endereço do site a partir do qual você chegou;</li>
                                <li><strong className="text-gray-300">Dados anônimos ou agregados:</strong> Respostas anônimas para pesquisas ou informações anônimas e agregadas sobre como a Loja é usufruída;</li>
                                <li><strong className="text-gray-300">Outras informações:</strong> Informações que não revelem especificamente a sua identidade ou que não são diretamente relacionadas a um indivíduo.</li>
                            </ul>
                            <p className="italic text-gray-500">Ao menos que você informe em algum formulário livre preenchido por você, nós não coletamos Dados Pessoais Sensíveis.</p>
                        </div>

                        {/* Sharing */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Compartilhamento de Dados Pessoais com terceiros</h2>
                            <p className="mb-4">Nós poderemos compartilhar seus Dados Pessoais:</p>
                            <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-400">
                                <li>Com a(s) empresa(s) parceira(s) que você selecionar ou optar em enviar os seus dados, bem como com provedores de serviços ou parceiros para gerenciar ou suportar certos aspectos de nossas operações comerciais em nosso nome;</li>
                                <li>Com terceiros, com o objetivo de nos ajudar a gerenciar a Loja;</li>
                                <li>Com terceiros, caso ocorra qualquer reorganização, fusão, venda, joint venture, cessão, transmissão ou transferência de toda ou parte da nossa empresa.</li>
                            </ul>
                        </div>

                        {/* International */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Transferências internacionais de Dados</h2>
                            <p>
                                Dados Pessoais e informações de outras naturezas coletadas por nós podem ser transferidos ou acessados por entidades pertencentes ao grupo corporativo das empresas parceiras em todo o mundo de acordo com esta Política de Privacidade.
                            </p>
                        </div>

                        {/* Auto Collection */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Forma de coleta automática de Dados Pessoais</h2>
                            <p className="mb-4">
                                Quando você visita a Loja, ela pode armazenar ou recuperar informações em seu navegador, seja na forma de cookies e de outras tecnologias semelhantes. Essas informações podem ser sobre você, suas preferências ou seu dispositivo e são usadas principalmente para que a Loja funcione como você espera.
                            </p>
                            <ul className="space-y-4">
                                <li className="bg-slate-900 border border-white/5 p-4">
                                    <strong className="text-white block mb-2 underline underline-offset-4 decoration-cyan-500/50">Por meio do navegador ou do dispositivo:</strong>
                                    Algumas informações são coletadas pela maior parte dos navegadores ou automaticamente por meio de dispositivos de acesso à internet, como o tipo de computador, resolução da tela, etc.
                                </li>
                                <li className="bg-slate-900 border border-white/5 p-4">
                                    <strong className="text-white block mb-2 underline underline-offset-4 decoration-cyan-500/50">Uso de cookies:</strong>
                                    Os cookies permitem a coleta de informações tais como o tipo de navegador, o tempo dispendido na Loja, etc. Caso não deseje que suas informações sejam coletadas por meio de cookies, você pode configurar os cookies no menu "opções" ou "preferências" do seu browser.
                                </li>
                                <li className="bg-slate-900 border border-white/5 p-4">
                                    <strong className="text-white block mb-2 underline underline-offset-4 decoration-cyan-500/50">Uso de pixel tags e outras tecnologias similares:</strong>
                                    Podem ser utilizados para rastrear ações de usuários da Loja, medir o sucesso das nossas campanhas de marketing e coletar dados estatísticos.
                                </li>
                            </ul>
                        </div>

                        {/* Rights */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Direitos do Usuário</h2>
                            <p className="mb-4">Você pode, a qualquer momento, requerer:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                                {[
                                    "Confirmação de tratamento",
                                    "Acesso aos dados",
                                    "Correção de dados",
                                    "Anonimização ou bloqueio",
                                    "Portabilidade de dados",
                                    "Eliminação de dados",
                                    "Informações de compartilhamento",
                                    "Revogação do consentimento"
                                ].map((right, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3">
                                        <div className="w-1.5 h-1.5 bg-cyan-500"></div>
                                        {right}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6">
                                Você deverá ter em mente que, em certos casos (por exemplo, devido a requisitos legais), o seu pedido poderá não ser imediatamente satisfeito, além de que nós poderemos não conseguir atendê-lo por conta de cumprimento de obrigações legais.
                            </p>
                        </div>

                        {/* Security */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Segurança dos Dados Pessoais</h2>
                            <p>
                                Buscamos adotar as medidas técnicas e organizacionais previstas pelas Leis de Proteção de Dados adequadas para proteção dos Dados Pessoais na nossa organização. Infelizmente, nenhuma transmissão ou sistema de armazenamento de dados tem a garantia de serem 100% seguros. Caso tenha motivos para acreditar que sua interação conosco tenha deixado de ser segura, favor nos notificar imediatamente.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Links de hipertexto</h2>
                            <p>
                                A Loja poderá conter links de hipertexto que redirecionará você para sites das redes dos nossos parceiros, anunciantes, fornecedores etc. Não nos responsabilizamos pelas políticas e práticas de coleta, uso e divulgação de outras organizações, tais como Facebook, Apple, Google, Microsoft, ou de qualquer outro desenvolvedor de software.
                            </p>
                        </div>

                        {/* Updates */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Atualizações desta Política</h2>
                            <p>
                                Se modificarmos nossa Política de Privacidade, publicaremos o novo texto na Loja, com a data de revisão atualizada. Podemos alterar esta Política de Privacidade a qualquer momento. Sua utilização da Loja após as alterações significa que aceitou as Políticas de Privacidade revisadas.
                            </p>
                        </div>

                        {/* Responsible */}
                        <div className="bg-cyan-900/20 border-2 border-cyan-500/20 p-8 text-center">
                            <h2 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-tighter">Pessoa responsável do tratamento</h2>
                            <p className="mb-4">
                                Caso pretenda exercer qualquer um dos direitos previstos nesta Política de Privacidade e/ou nas Leis de Proteção de Dados, favor contatar-nos:
                            </p>
                            <p className="text-2xl font-black text-cyan-400 font-mono tracking-tighter">
                                contato.grupowebcluster@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors text-sm font-mono uppercase tracking-widest"
                        >
                            ← Voltar ao Início
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
