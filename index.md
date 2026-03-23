---
layout: cv
title: Eugene de Beste - Curriculum Vitae
---
# Eugene de Beste
<p id="subtitle"><u>Infrastructure Operations Manager (Secondment) | Platform & Infrastructure Engineering</u></p>

<div class="webaddress">
<a href="mailto:eugene@debeste.co.za" aria-label="Email Address"><i class="fa fa-envelope" aria-hidden="true"></i>eugene@debeste.co.za</a>
<a href="https://eugene.debeste.co.za" aria-label="Personal Website"><i class="fa fa-globe" aria-hidden="true"></i>eugene.debeste.co.za</a>
<a href="https://www.linkedin.com/in/eugene-de-beste/" aria-label="LinkedIn Profile"><i class="fa fa-linkedin" aria-hidden="true"></i>linkedin.com/in/eugene-de-beste</a>
<a href="https://github.com/Banshee1221" aria-label="GitHub Profile"><i class="fa fa-github" aria-hidden="true"></i>github.com/Banshee1221</a>
<span><i class="fa fa-map-marker" aria-hidden="true"></i>Cape Town, South Africa</span>
</div>

<div class="quote-block">
  <p class="quote-text">"The right man in the wrong place can make all the difference in the world."</p>
  <p id="quoted">- G-man, Half-Life 2.</p>
</div>

<section class="cv-item cv-item--section-inline">
  <div class="cv-item__rail"><h2>Professional Summary</h2></div>
  <div class="cv-item__content">
    <p>Innovative infrastructure and platform engineer turned operations leader who thrives on diving deep into complex problems and engineering sustainable, tech-debt-free solutions. Proven across the full stack from low-level kernel and firmware debugging through to customer migrations, CX self-service platforms, and operational modernisation.</p>
    <p>I consistently go above and beyond to replace brittle, inherited systems with clean, repeatable automation grounded in production constraints, and leverage AI-assisted development tools to accelerate research, scripting, and internal tooling.</p>
  </div>
</section>

<section class="cv-item cv-item--section-inline">
  <div class="cv-item__rail"><h2>Core Skills / Technologies</h2></div>
  <div class="cv-item__content">
    <ul>
      <li><strong>Cloud / Platform:</strong> OpenStack, Kolla-ansible, Kubernetes, Ceph RBD, MAAS, NetBox, PowerDNS, GitOps, ArgoCD, FluxCD</li>
      <li><strong>Automation / IaC / Tooling:</strong> Ansible, Python, Windmill, config generation, internal tooling</li>
      <li><strong>Systems / Virtualisation:</strong> QEMU, KVM, libvirt, OVMF/EDK2, Open vSwitch, SR-IOV</li>
      <li><strong>Observability / Ops:</strong> Prometheus, Grafana, SRE, incident response, runbooks, operational tooling</li>
      <li><strong>GPU / HPC / Networking:</strong> H100, H200, GH200, GPU virtualisation, InfiniBand, RoCEv2, GPU Direct RDMA</li>
      <li><strong>AI-assisted engineering:</strong> Anthropic Claude / Claude Code, OpenAI ChatGPT Codex (via <code>opencode</code>), Cursor</li>
    </ul>
  </div>
</section>

## Professional Experience

<section class="cv-item cv-item--experience">
  <div class="cv-item__rail"><h3>NexGen Cloud</h3></div>
  <div class="cv-item__content">
    <div class="entry-row entry-row--role">
      <div class="entry-main"><strong>Infrastructure Operations Manager (Secondment)</strong></div>
      <div class="entry-meta" style="margin-right: -0.2em;">Mar 2026 - Current</div>
    </div>
    <div class="entry-row entry-row--role">
      <div class="entry-main"><strong>Head of Infrastructure Operations (Secondment)</strong></div>
      <div class="entry-meta">Jul 2025 - Feb 2026</div>
    </div>
    <div class="entry-row entry-row--role">
      <div class="entry-main"><strong>Senior Infrastructure Engineer</strong></div>
      <div class="entry-meta">Jan 2024 - Jun 2025</div>
    </div>
    <p class="cv-note"><em>Title updated from Head of Infrastructure Operations to Infrastructure Operations Manager during an internal leadership restructuring; scope remained unchanged.</em></p>
    <p>At NexGen Cloud, I progressed from hands-on infrastructure engineering into infrastructure operations leadership while remaining deeply embedded in OpenStack, GPU cloud, automation, and systems debugging. I proactively identified and eliminated legacy tech debt, modernised region bring-up from the ground up, and consistently went beyond my defined scope to deliver production-grade tooling and reliability improvements.</p>
    <ul>
      <li>Overhauled region deployment end-to-end by designing custom Ansible, Python/config-generation tooling, and integrating upstream Kolla-ansible, systematically eliminating legacy tech debt and replacing fragile hand-grown patterns with clean, repeatable infrastructure.</li>
      <li>Evaluated automation and self-service tooling, selected and productionised Windmill, and built an audited CX self-service platform with 10,000+ lines of Python libraries, scripts, and flows, enabling delegated troubleshooting and remediation and reducing BAU load on infrastructure engineering.</li>
      <li>Dove deep into complex, cross-cutting technical problems others had deprioritised, engineering targeted Python-based hypervisor interventions that isolated deep-seated vendor hardware faults and permanently neutralized recurring customer-impacting outages.</li>
      <li>Planned and executed massive customer migrations from their outgoing platform to NexGen's platform in a mostly automated fashion, combining storage, cloud, and customer-facing delivery work.</li>
      <li>Diagnosed low-level firmware, kernel, and virtualisation bottlenecks behind GPU VM boot times through methodical root-cause analysis, shipping a production fix that reduced boot times by 80%+ where applicable.</li>
      <li>Drove platform reliability improvements well beyond day-to-day responsibilities, building observability, operational tooling, incident response patterns, runbooks, and handover practices, while self-directing R&amp;D on static 1GB hugepages, CPU pinning, GPU Direct RDMA, and Gnocchi HA design.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--experience">
  <div class="cv-item__rail"><h3>Council for Scientific and Industrial Research, Centre for High Performance Computing (CHPC)</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>Senior Cloud and HPC Technologist II</strong></div>
      <div class="entry-meta">2020 - 2024</div>
    </div>
    <ul>
      <li>Led the OpenStack Research Cloud and ACE Lab cloud infrastructure serving hundreds of researchers, taking ownership well beyond the formal brief to cover cloud operations, storage, networking, and frontline support.</li>
      <li>Championed GitOps and DevOps adoption across CHPC, introducing CI/CD and infrastructure-as-code to replace ad-hoc manual processes with sustainable, repeatable deployment patterns.</li>
      <li>Architected and operated multi-petabyte Ceph storage for HPC workloads, proactively building monitoring and inventory systems that eliminated operational blind spots.</li>
      <li>Co-led the International Student Cluster Competition effort, voluntarily mentoring teams and developing training material for graduate staff and researchers.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--experience">
  <div class="cv-item__rail"><h3>ILIFU Project, University of Cape Town (UCT)</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>External Consultant</strong></div>
      <div class="entry-meta">2018 - 2020</div>
    </div>
    <ul>
      <li>Planned and delivered a private OpenStack cloud for astronomy and bioinformatics with multi-petabyte Ceph storage.</li>
      <li>Prototyped the platform on test hardware, then moved it into production with OpenStack, Ceph, and Manila evaluation for file services.</li>
      <li>Supported handover and ongoing technical guidance during deployment, including cloud and storage troubleshooting.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--experience">
  <div class="cv-item__rail"><h3>South African National Bioinformatics Institute (SANBI), University of the Western Cape (UWC)</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>Systems Developer</strong></div>
      <div class="entry-meta">2017 - 2020</div>
    </div>
    <ul>
      <li>Trained and supported student teams for the CHPC Student Cluster Competition, stepping up to redesign delivery for fully remote operation during the pandemic.</li>
      <li>Migrated in-house VM management onto OpenStack and supported Health Information Systems Programme (HISP), National Institute for Communicable Diseases (NICD), and UWC HPC deployments across cloud and bare-metal environments.</li>
      <li>Automated bare-metal and cloud builds with MAAS, PXE, Ansible, and Terraform, replacing manual provisioning workflows and introducing FreeIPA, monitoring, and change-management practices to reduce operational tech debt.</li>
      <li>Went beyond the core developer role to support Ceph, networking, and helpdesk operations across research and IT teams while maintaining internal tooling and documentation.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--experience">
  <div class="cv-item__rail"><h3>VOSS Solutions</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>Systems Administrator Intern</strong></div>
      <div class="entry-meta">2015 - 2016</div>
    </div>
    <ul>
      <li>Managed production upgrades and supported VMware, Active Directory, DNS, and WSUS environments.</li>
      <li>Administered Cisco ASA and Linux access controls for internal users.</li>
      <li>Assisted with procurement, quotes, purchase orders, and desktop support.</li>
    </ul>
  </div>
</section>

## Selected Projects

<section class="cv-item cv-item--project">
  <div class="cv-item__rail"><h3>African Pathogen Archive</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main">Helped secure the CHPC and SANBI Memorandum of Understanding (MoU) and shaped the Infrastructure Automation Lead role for the project.</div>
      <div class="entry-meta">CHPC</div>
    </div>
    <p>Ported the microservice stack into a local development environment and built Kubernetes / OpenStack / Terraform / FluxCD automation for repeatable deployment.</p>
  </div>
</section>

<section class="cv-item cv-item--project">
  <div class="cv-item__rail"><h3>HISP OpenStack Deployment</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main">Designed the network layout, configured switching for the control plane, and delivered MAAS and Kolla-ansible based OpenStack deployment support.</div>
      <div class="entry-meta">CHPC</div>
    </div>
    <p>Provided training and documentation to help the team operate the platform independently.</p>
  </div>
</section>

<section class="cv-item cv-item--project">
  <div class="cv-item__rail"><h3>Student Cluster Competition</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main">Helped move the competition online during COVID by producing training material, learning content, and remote support for students.</div>
      <div class="entry-meta">CHPC</div>
    </div>
  </div>
</section>

<section class="cv-item cv-item--project">
  <div class="cv-item__rail"><h3>Ilifu Project</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main">Planned and prototyped the data-intensive OpenStack and Ceph research cloud that supported astronomy and bioinformatics workloads.</div>
      <div class="entry-meta">UCT / SANBI</div>
    </div>
    <p>Contributed to production delivery, Manila exploration, and second-tier storage and cloud support.</p>
  </div>
</section>

## Education

<section class="cv-item">
  <div class="cv-item__rail"><h3>Tertiary Education</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong><u>M.Sc. Bioinformatics</u></strong> - <em>South African National Bioinformatics Institute</em>, <em>University of the Western Cape</em></div>
      <div class="entry-meta">2016-2019</div>
    </div>
    <ul>
      <li>Awarded <em>Cum Laude</em>.</li>
    </ul>
    <div class="entry-row">
      <div class="entry-main"><strong><u>B.Sc. Hons Information Technology</u></strong> - <em>University of Cape Town</em></div>
      <div class="entry-meta">2015</div>
    </div>
    <ul>
      <li>Mini-thesis: <strong>de Beste, E</strong>., Stewart, G. and Gain, J. (2015). PyTeacher: Determining the Usefulness of Visual Learning for Computer Science.</li>
      <li>Awarded B.Sc. Hons in Information Technology <em>Cum Laude</em>.</li>
    </ul>
    <div class="entry-row">
      <div class="entry-main"><strong><u>B.Sc. Computer Science</u></strong> - <em>University of the Western Cape</em></div>
      <div class="entry-meta">2012-2014</div>
    </div>
    <ul>
      <li>Awarded B.Sc. Computer Science <em>Cum Laude</em>.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--section-inline">
  <div class="cv-item__rail"><h2>Selected Publications & Awards</h2></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>de Beste, E.</strong> (2019). <em>"Enabling the processing of bioinformatics workflows where data is located through the use of cloud and container technologies"</em>. <a href="static/education/msc_thesis.pdf">Thesis</a></div>
      <div class="entry-meta">2019</div>
    </div>
    <div class="entry-row">
      <div class="entry-main">Ahmed, A.E., Mpangase, P.T., Panji, S., Baichoo, S., Souilmi, Y., Fadlelmola, F.M., Alghali, M., Aron, S., Bendou, H., <strong>de Beste, E.</strong> and Mbiyavanga, M. (2018). <em>"Organizing and running bioinformatics hackathons within Africa: The H3ABioNet cloud computing experience"</em>. <em>AAS Open Research</em>, 1.</div>
      <div class="entry-meta">2018</div>
    </div>
    <p>Baichoo, S., Souilmi, Y., Panji, S. et al. (2018). <em>"Developing reproducible bioinformatics analysis workflows for heterogeneous computing environments to support African genomics."</em>. <em>BMC Bioinformatics</em> 19, 457.</p>
    <div class="entry-row">
      <div class="entry-main"><strong>de Beste, E.</strong>, Christoffels, A., van Heusden, P. (2019). <em>"Leveraging Open Source Technologies to Rapidly Deploy Infrastructure with Minimum Human Capacity"</em>. <em>Centre for High Performance Computing Annual Conference</em>.</div>
      <div class="entry-meta">2019</div>
    </div>
    <div class="entry-row">
      <div class="entry-main"><strong><u>First Place Overall Prize for the ISC'14 Student Cluster Challenge</u></strong> - <em>International Supercomputing Conference, Leipzig, Germany</em></div>
      <div class="entry-meta">2014</div>
    </div>
    <div class="entry-row">
      <div class="entry-main"><strong><u>First Place for the CHPC Student Cluster Competition 2013</u></strong> - <em>Centre for High Performance Computing, Council for Scientific and Industrial Research</em></div>
      <div class="entry-meta">2013</div>
    </div>
  </div>
</section>
