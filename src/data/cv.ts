export type HeaderLink = {
  label: string;
  href?: string;
  value: string;
  kind: 'email' | 'website' | 'linkedin' | 'github' | 'location';
};

export type SkillGroup = {
  label: string;
  items: string;
};

export type Role = {
  title: string;
  meta: string;
  bullets?: string[];
};

export type ExperienceItem = {
  rail: string;
  roles: Role[];
  note?: string;
  intro?: string;
  bullets?: string[];
};

export type CompactItem = {
  rail: string;
  meta: string;
  bullets?: string[];
  lead?: string;
  details?: string[];
};

export type ImpactEntry = {
  html: string;
  meta: string;
  href?: string;
};

export const profile = {
  name: 'Eugene de Beste',
  title: 'Infrastructure & Platform Engineering Leader · Cloud Platforms, Reliability, Automation, GPU/HPC',
  quote: '“The right man in the wrong place can make all the difference in the world.”',
  attribution: '— G-man, Half-Life 2.',
  links: [
    {
      label: 'Email',
      href: 'mailto:eugene@debeste.co.za',
      value: 'eugene@debeste.co.za',
      kind: 'email'
    },
    {
      label: 'Web',
      href: 'https://eugene.debeste.co.za',
      value: 'eugene.debeste.co.za',
      kind: 'website'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eugene-de-beste/',
      value: 'linkedin.com/in/eugene-de-beste',
      kind: 'linkedin'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Banshee1221',
      value: 'github.com/Banshee1221',
      kind: 'github'
    },
    {
      label: 'Base',
      value: 'Cape Town, South Africa',
      kind: 'location'
    }
  ] satisfies HeaderLink[]
};

export const summary = [
  'Infrastructure and platform engineer turned operations leader, with nearly a decade across production cloud, research computing, and HPC. Comfortable moving between strategy and the command line: <strong>OpenStack</strong> private cloud, <strong>Kubernetes/GitOps</strong>, observability, automation, networking, storage, and GPU platforms.',
  'Built the automation and observability backbone for a multi-region GPU cloud, then shaped the infrastructure operations function around clear ownership, practical support enablement, incident response, and reliable delivery. Brings a production-safety mindset (dry runs, idempotency, staged rollouts, least privilege, GitOps, and strong documentation) without losing sight of the teams operating the systems.'
];

export const skills: SkillGroup[] = [
  {
    label: 'Cloud / Platform',
    items: 'OpenStack, Kolla-Ansible, Kubernetes, Kubespray, Cilium, Argo CD, ApplicationSet, Helm, Ceph, MAAS, NetBox, InfraHub, PowerDNS'
  },
  {
    label: 'Automation / IaC / Tooling',
    items: 'Ansible, Python, Go, GitOps, CI/CD, Windmill, Packer, Terraform'
  },
  {
    label: 'Systems / Virtualisation',
    items: 'Linux, QEMU, KVM, libvirt, OVMF/EDK2, Open vSwitch, SR-IOV'
  },
  {
    label: 'GPU / HPC',
    items: 'H100, H200, B200, GH200, GPU virtualisation, NUMA/hugepages, InfiniBand, RoCEv2, GPUDirect RDMA, DCGM'
  },
  {
    label: 'Networking / Integration',
    items: 'VLANs, VRRP, MetalLB, BGP, FRR, L2/L3 fabrics, Redfish/IPMI/SNMP'
  },
  {
    label: 'Observability / Ops',
    items: 'Prometheus, VictoriaMetrics, Grafana, Alertmanager, incident response & RCA, runbooks, capacity planning, SRE'
  },
  {
    label: 'Security / Secrets',
    items: 'IAM & access scopes, OIDC / Authentik, Sealed Secrets, least-privilege design'
  },
  {
    label: 'Working style',
    items: 'Production safety, documentation, cross-team enablement, AI-assisted engineering workflows'
  }
];

export const experience: ExperienceItem[] = [
  {
    rail: 'NexGen Cloud',
    note: 'Multi-region GPU cloud (OpenStack-based). Title updated during internal restructuring; scope unchanged.',
    roles: [
      {
        title: 'Infrastructure Operations Manager (Secondment), previously Head of Infrastructure Operations',
        meta: 'Jul 2025 - Present',
        bullets: [
          'Built the infrastructure operations function around a clear operating model, escalation paths, and permission/<strong>IAM</strong> scopes, separating L1/L2 support from infrastructure engineering and reducing repeat escalations into the engineering team.',
          'Owned observability platform strategy: designed a unified monitoring architecture feeding a new Network Operations Centre (NOC) and led build-vs-buy / total-cost-of-ownership selection (open-source <strong>Prometheus</strong>/<strong>VictoriaMetrics</strong> + <strong>DCGM</strong> vs commercial), scaling the approach toward a large-scale NVIDIA <strong>B200</strong> SuperPOD region.',
          'Primary engineer for centralised bare-metal observability, building a <strong>NetBox</strong>-driven stack where in-region collectors feed a central <strong>VictoriaMetrics</strong> and <strong>Grafana</strong> deployment with an alert suite tuned for signal over noise. Currently centralising monitoring across the EU bare-metal region (two clusters).',
          'Built CX and L2 enablement across OpenStack, Linux, and networking: training tracks, runbooks, decision trees, and scoped self-service workflows.',
          'Coordinated data-centre, hardware, and partner engagement, and led the observability procurement process through vendor evaluation, scenario presentation, and partner justification.',
          'Established incident-response and root-cause-analysis (RCA) practice; led major-incident response and authored RCAs for customer-impacting outages.'
        ]
      },
      {
        title: 'Senior Infrastructure Engineer',
        meta: 'Jan 2024 - Jun 2025',
        bullets: [
          'Diagnosed and remediated deep <strong>GPU virtualisation</strong> issues across H100, H200, B200, and GH200 fleets, including NUMA, CPU-pinning, and hugepage scheduling, plus a <strong>libvirt</strong> XML-marker fix that resolved a modify-restart event race.',
          'Enabled <strong>GPUDirect RDMA</strong> over RoCE/InfiniBand inside VMs (PCIe relaxed-ordering, ATS/ACS, IOMMU), and ran a fleet-wide firmware audit after detecting a faulty H100 VBIOS.',
          'Cut large-BAR GPU VM boot times with <strong>OVMF/EDK2</strong> and libvirt XML changes on pre-6.14 kernels, a projected <strong>80%+</strong> reduction in affected boots.',
          'Built the <strong>GPU stock reporter</strong>, the platform\'s capacity source of truth: an event-driven service with leader election, a health-gating killswitch, and ground-truth reconciliation against the Nova database so unhealthy GPUs stay out of sellable capacity.',
          'Standardised OpenStack region deployment by building custom Ansible and Python tooling around <strong>Kolla-Ansible</strong>, supporting major platform releases and accelerating node and region bring-up across four regions.',
          'Designed and ran the multi-region <strong>Kubernetes</strong> platform for internal services on Kubespray, <strong>Argo CD / ApplicationSet</strong> GitOps, and Cilium, spanning both BGP/L3 and L2-only fabrics and integrating with existing VRRP and MetalLB patterns.',
          'Productionised <strong>Windmill</strong> as an audited, least-privilege self-service automation platform with <strong>10,000+ lines of Python</strong>, consolidating six support workflows into two idempotent, state-tracked flows.',
          'Built supporting platform tooling: a plugin-based <strong>NetBox sync tool</strong> reconciling inventory and DNS across NetBox, MAAS, and PowerDNS, and a highly available billing-metering stack (<strong>Gnocchi</strong> + Ceph + MySQL InnoDB Cluster + Redis Sentinel + HAProxy/BGP).',
          'Migrated NFS workloads to <strong>Ceph RBD</strong> and tuned RBD performance for VMs; planned and executed largely automated migration of <strong>300+ virtual machines</strong> with hands-on workload troubleshooting.'
        ]
      }
    ]
  },
  {
    rail: 'CSIR / CHPC',
    roles: [{ title: 'Senior Cloud and HPC Technologist II', meta: '2020 - 2024' }],
    bullets: [
      'Led the OpenStack Research Cloud and ACE Lab at the CHPC, part of the CSIR, as R&D platforms for cloud/HPC experimentation, while also contributing to Sebowa production-cloud operations serving hundreds of researchers.',
      'Deployed the CHPC Pretoria region for Sebowa and trained the local team on OpenStack operations, support, and policy alignment.',
      'Architected and operated multi-petabyte <strong>Ceph storage</strong> for HPC workloads, building monitoring and inventory systems that improved operational visibility.',
      'Co-led the South African Student Cluster Competition programme, mentoring teams and developing training material for cohorts progressing to the ISC Student Cluster Challenge.'
    ]
  },
  {
    rail: 'UCT / ILIFU',
    roles: [{ title: 'External Consultant', meta: '2018 - 2020' }],
    bullets: [
      'Planned and delivered a private OpenStack cloud for astronomy and bioinformatics with multi-petabyte Ceph storage.',
      'Prototyped the platform on test hardware, then moved it into production with OpenStack, Ceph, and Manila evaluation for file services.',
      'Supported handover and ongoing technical guidance during deployment, including cloud and storage troubleshooting.'
    ]
  },
  {
    rail: 'SANBI / UWC',
    roles: [{ title: 'Systems Developer', meta: '2017 - 2020' }],
    bullets: [
      'Trained and supported student teams for the CHPC Student Cluster Competition, redesigning delivery for fully remote operation during the pandemic.',
      'Migrated in-house VM management onto OpenStack and supported HISP, NICD, and UWC HPC deployments across cloud and bare-metal environments.',
      'Automated bare-metal and cloud builds with <strong>MAAS</strong>, PXE, Ansible, and Terraform, introducing FreeIPA, monitoring, and change-management practices.',
      'Supported Ceph storage, networking, and helpdesk operations across research and IT teams.'
    ]
  }
];

export const projects: CompactItem[] = [
  {
    rail: 'GPU Support Diagnostics',
    meta: 'NexGen Cloud',
    bullets: [
      'Built a <strong>Go</strong> collector and a <strong>React/TypeScript</strong> diagnostics dashboard for L2 support, with GPU log analysis (NVRM/uvm/Xid) and automatic bare-metal-vs-VM detection.',
      'Tuned detection to cut false positives, and designed a secure, no-auto-upload run path so customer diagnostics stay under operator control.'
    ]
  },
  {
    rail: 'Open-source GPU PCIe Hotfix',
    meta: 'Open Source',
    bullets: [
      'Published a remediation for a recurring GPU "falling off the bus" PCIe fault encountered in production.'
    ]
  },
  {
    rail: 'African Pathogen Archive',
    meta: 'CHPC / SANBI',
    bullets: [
      'Helped secure the CHPC and SANBI MoU and shaped the Infrastructure Automation Lead role.',
      'Built <strong>Flux CD</strong> automation for repeatable deployment across Kubernetes and OpenStack.'
    ]
  }
];

export const education: CompactItem[] = [
  {
    rail: 'SANBI / UWC',
    meta: '2016 - 2019',
    lead: '<strong>M.Sc. Bioinformatics</strong> <span class="font-normal text-[var(--ink-mute)]">(<em>Cum Laude</em>)</span>'
  },
  {
    rail: 'UCT',
    meta: '2015',
    lead: '<strong>B.Sc. Hons Information Technology</strong> <span class="font-normal text-[var(--ink-mute)]">(<em>Cum Laude</em>)</span>'
  },
  {
    rail: 'UWC',
    meta: '2012 - 2014',
    lead: '<strong>B.Sc. Computer Science</strong> <span class="font-normal text-[var(--ink-mute)]">(<em>Cum Laude</em>)</span>'
  }
];

export const scholarlyImpact = {
  publications: [
    {
      meta: '2026',
      href: 'https://doi.org/10.22369/issn.2153-4136/17/1/6',
      html: 'Johnston, B., Thorne, N., Cawood, M., <strong>de Beste, E.</strong>, Macleod, D. and Poole, J. (2026). <em>"A Retrospective on South Africa\'s Student Cluster Competition and its Model for Inclusive HPC Outreach and Training (2012-2020)"</em>. <em>The Journal of Computational Science Education</em>, 17(1), pp. 42–49.'
    },
    {
      meta: '2024',
      href: 'https://dl.acm.org/doi/fullHtml/10.1145/3626203.3670573',
      html: '<strong>Beukman, M.</strong>, Jumoorty, S., Faller, J.L., <strong>de Beste, E.</strong> and Johnston, B. (2024). <em>"Second Life: Enabling a Student Special Interest Group through Decommissioned HPC Systems"</em>. <em>Practice and Experience in Advanced Research Computing 2024</em> (PEARC 2024).'
    },
    {
      meta: '2019',
      href: 'education/msc_thesis.pdf',
      html: '<strong>de Beste, E.</strong> (2019). <em>"Enabling the processing of bioinformatics workflows where data is located through the use of cloud and container technologies"</em>. M.Sc. Bioinformatics thesis, <em>SANBI / UWC</em>.'
    },
    {
      meta: '2019',
      href: 'https://events.chpc.ac.za/event/47/book-of-abstracts.pdf#page=73',
      html: '<strong>de Beste, E.</strong>, Christoffels, A., van Heusden, P. (2019). <em>"Leveraging Open Source Technologies to Rapidly Deploy Infrastructure with Minimum Human Capacity"</em>. <em>Centre for High Performance Computing Annual Conference</em>.'
    },
    {
      meta: '2018',
      href: 'https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-018-2446-1',
      html: 'Baichoo, S., Souilmi, Y., Panji, S. et al. (2018). <em>"Developing reproducible bioinformatics analysis workflows for heterogeneous computing environments to support African genomics."</em>. <em>BMC Bioinformatics</em> 19, 457.'
    },
    {
      meta: '2018',
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7194140/',
      html: 'Ahmed, A.E., Mpangase, P.T., Panji, S., Baichoo, S., Souilmi, Y., Fadlelmola, F.M., Alghali, M., Aron, S., Bendou, H., <strong>de Beste, E.</strong> and Mbiyavanga, M. (2018). <em>"Organizing and running bioinformatics hackathons within Africa: The H3ABioNet cloud computing experience"</em>. <em>AAS Open Research</em>, 1.'
    }
  ] satisfies ImpactEntry[],
  awards: [
    {
      meta: '2014',
      html: '<strong>First Place Overall Prize for the ISC\'14 Student Cluster Challenge</strong> – <em>International Supercomputing Conference, Leipzig, Germany</em>'
    },
    {
      meta: '2013',
      html: '<strong>First Place for the CHPC Student Cluster Competition 2013</strong> – <em>Centre for High Performance Computing, Council for Scientific and Industrial Research</em>'
    }
  ] satisfies ImpactEntry[]
};
