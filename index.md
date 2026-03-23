---
layout: cv
title: Eugene de Beste - Curriculum Vitae
---
# Eugene de Beste
<p id="subtitle"><u>Infrastructure Operations Manager (Secondment) | Platform & Infrastructure Engineering</u></p>

<div class="webaddress">
<a href="https://eugene.debeste.co.za"><i class="fa fa-globe"></i>eugene.debeste.co.za</a>
<br />
<a href="https://www.linkedin.com/in/eugene-de-beste/"><i class="fa fa-linkedin"></i>LinkedIn Profile</a>
<br />
<a href="https://github.com/Banshee1221"><i class="fa fa-github"></i>GitHub Profile</a>
<br />
Cape Town, South Africa
</div>

<div class="quote-block">
  <p class="quote-text">"The right man in the wrong place can make all the difference in the world."</p>
  <p id="quoted">- G-man, Half-Life 2.</p>
</div>

<section class="cv-item cv-item--section-inline">
  <div class="cv-item__rail"><h2>Professional Summary</h2></div>
  <div class="cv-item__content">
    <p>Senior infrastructure engineer turned infrastructure operations leader, with hands-on depth across OpenStack, GPU cloud, automation, and reliability engineering. Comfortable moving from low-level debugging and deployment tooling through customer migrations and CX self-service enablement.</p>
    <p>I modernise brittle deployment paths into repeatable systems grounded in production constraints, and I use AI-assisted development tools to accelerate research, scripting, and internal tooling.</p>
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
      <li><strong>AI-assisted engineering:</strong> Anthropic Claude / Claude Code, ChatGPT Codex via <code>opencode</code>, Cursor</li>
    </ul>
  </div>
</section>

## Professional Experience

<section class="cv-item">
  <div class="cv-item__rail"><h3>NexGen Cloud</h3></div>
  <div class="cv-item__content">
    <div class="entry-row entry-row--role">
      <div class="entry-main"><strong>Infrastructure Operations Manager (Secondment)</strong></div>
      <div class="entry-meta">Mar 2026 - Jun 2026</div>
    </div>
    <div class="entry-row entry-row--role">
      <div class="entry-main"><strong>Head of Infrastructure Operations (Secondment)</strong></div>
      <div class="entry-meta">Jul 2025 - Feb 2026</div>
    </div>
    <div class="entry-row entry-row--role">
      <div class="entry-main"><strong>Senior Infrastructure Engineer</strong></div>
      <div class="entry-meta">Jan 2024 - Jun 2025</div>
    </div>
    <p><em>Title updated from Head of Infrastructure Operations to Infrastructure Operations Manager during an internal leadership restructuring; scope remained unchanged.</em></p>
    <p>At NexGen Cloud, I progressed from hands-on infrastructure engineering into infrastructure operations leadership while remaining close to OpenStack, GPU cloud, automation, and systems debugging. I modernised region bring-up, built CX self-service tooling, and kept customer migrations and reliability work grounded in real platform constraints.</p>
    <ul>
      <li>Standardised region deployment with custom Ansible, custom Python/config-generation tooling, and upstream Kolla-ansible, replacing hand-grown container deployment patterns and brittle legacy Ansible repos with repeatable bring-up and node deployment.</li>
      <li>Evaluated automation and CX self-service tools, moved beyond an earlier Rundeck attempt, and selected, PoC'd, and implemented Windmill in production; the platform now provides audited, delegated self-service for troubleshooting and remediation, spans 10,000+ lines of Python libraries, scripts, and flows, and uses Claude Code, ChatGPT Codex via <code>opencode</code>, and Cursor as practical accelerators for research and scripting.</li>
      <li>Built <code>nova-libvirt-interceptor</code> after a long debugging effort on problematic vendor hardware, isolating PCIe-switch and NUMA-related behaviour and turning a customer-impacting platform fault into a targeted Python systems fix.</li>
      <li>Planned and executed the Oblivus / Skyportal migration from the outgoing platform to NexGen's platform in a mostly automated fashion, combining storage, cloud, and customer-facing delivery work.</li>
      <li>Diagnosed low-level firmware, kernel, and virtualisation bottlenecks behind GPU VM boot times and shipped a production fix that reduced boot times by 80%+ where applicable.</li>
      <li>Improved platform reliability through monitoring, observability, operational tooling, incident response patterns, runbooks, and handover practices, while continuing R&amp;D on static 1GB hugepages, CPU pinning, GPU Direct RDMA, and Gnocchi HA design work without overstating unfinished features as delivered products.</li>
    </ul>
  </div>
</section>

<section class="cv-item">
  <div class="cv-item__rail"><h3>Council for Scientific and Industrial Research, Centre for High Performance Computing</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>Senior Cloud and HPC Technologist II</strong></div>
      <div class="entry-meta">2020 - 2024</div>
    </div>
    <ul>
      <li>Led the OpenStack Research Cloud and ACE Lab cloud infrastructure serving hundreds of researchers, with responsibility spanning cloud operations, storage, networking, and support.</li>
      <li>Drove GitOps and DevOps adoption across CHPC with CI/CD, infrastructure-as-code, and more repeatable deployment patterns for research infrastructure.</li>
      <li>Architected and operated multi-petabyte Ceph storage for HPC workloads, including monitoring and inventory systems that improved operational visibility.</li>
      <li>Co-led the International Student Cluster Competition effort, mentoring teams and developing training material for graduate staff and researchers.</li>
    </ul>
  </div>
</section>

<section class="cv-item">
  <div class="cv-item__rail"><h3>ILIFU Project, University of Cape Town</h3></div>
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

<section class="cv-item">
  <div class="cv-item__rail"><h3>South African National Bioinformatics Institute, University of the Western Cape</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>Systems Developer</strong></div>
      <div class="entry-meta">2017 - 2020</div>
    </div>
    <ul>
      <li>Trained and supported student teams for the CHPC Student Cluster Competition, including the move to remote delivery during the pandemic.</li>
      <li>Migrated in-house VM management onto OpenStack and supported HISP, NICD, and UWC HPC deployments across cloud and bare-metal environments.</li>
      <li>Automated bare-metal and cloud builds with MAAS, PXE, Ansible, and Terraform, and introduced FreeIPA, monitoring, and change-management practices.</li>
      <li>Supported Ceph, networking, and helpdesk operations across research and IT teams while maintaining internal tooling and documentation.</li>
    </ul>
  </div>
</section>

<section class="cv-item">
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
      <div class="entry-main">Helped secure the CHPC and SANBI MoU and shaped the Infrastructure Automation Lead role for the project.</div>
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
